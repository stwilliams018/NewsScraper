var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var path = require("path")
var axios = require("axios");
var cheerio = require("cheerio");

var db = require("./models");

var PORT = 3100;

var app = express();


app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});


mongoose.connect("mongodb://localhost/unit18Populater", { useNewUrlParser: true });

app.get("/", function(req,res){
    axios.get("https://www.nytimes.com", function(response){
        var $ = cheerio.load(response.data);
      console.log(response);
        $("article").each(function(i, elemet){
            var result = {};

            result.title = $(element)
            .find("h2.headline").
            Text();
            result.url = $(element)
            .find("a")
            .attr("href");
            result.summary = $(element)
            .find("p.summary")
            Text();

            db.Article.create(result)
            .then(function(dbArticle) {
            console.log(dbArticle);
            })
            .catch(function(err) {
            console.log(err);
            });

        })
    })
})

app.get("/articles", function(req, res) {
    db.Article.find({}).limit(10)
      .then(function(dbArticle) {
        res.json(dbArticle);
      })
      .catch(function(err) {
        res.json(err);
      });

  });

app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });
  