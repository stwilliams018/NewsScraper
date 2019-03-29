$.getJSON("/articles", function(data) {
    for (var i = 0; i < data.length; i++) {
      $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title  + "<br />" + data[i].summary + "</p>");
      $("#articles").append("<h3>" + data[i].url + "</h3><br/><br/><br/>")
    }
    console.log(data)
  });

  $(document).on("click", "p", function() {
    $("#results-modal").modal("toggle");
    //var thisId = $(this).attr("data-id");
    })