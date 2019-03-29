$.getJSON("/articles", function(data) {
    for (var i = 0; i < data.length; i++) {
      $(".articles").append("<h5 data-id='" + data[i]._id + "'>" + data[i].title + "<a href=" + data[i].link + ">" + "     --    "  +  "Article Link</a></h5");
      $(".articles").append("<p>" + data[i].summary + "</p><br/>")
    }
    console.log(data)
  });

$(document).on("click", "h5", function() {
    $("#results-modal").modal("toggle");
    //var thisId = $(this).attr("data-id");
    })


$().on("click", "#close", function() {
    $("#comments").empty();
})



//$(document).on("click", "#submit", function() {
//     var result = {
//       comments = ".comments"
// }
  
    
    
//    db.comments.create(result)
//            .then(function(dbArticle) {
//            console.log(dbArticle);
//            })
//            .catch(function(err) {
//            console.log(err);
//          });

//        $("#comments").empty();
//})