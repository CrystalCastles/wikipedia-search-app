$(document).ready(function() {
  $("#search").on("click", function() {
    $(".content-bars").empty();
    $(".content-bars").css("display", "none");
    var searchTerm = $("#searchTerm").val();
    var url = "https://en.wikipedia.org/w/api.php?action=query&list=search&utf8=&format=json&srsearch=" + searchTerm + "&callback=?";
    $.ajax({
      url: url,
      type: 'GET',
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      success: function(data) {
        console.log(data);
        for(i=0;i<10;i++){
          $(".search-bar").css("top", "10%");
          $(".search-bar").css("transition", "all 0.1s ease-in-out");
          $(".content-bars").fadeIn(700).append("<a target=_blank href=https://en.wikipedia.org/wiki/" +  encodeURIComponent(data.query.search[i].title) + ">" +  "<div class='bar'>" + "<div id='title'>" + data.query.search[i].title + "</div>" + "<br>" + "<div id='snippet'>" + data.query.search[i].snippet + "</div>" + "</div>" + "</a>");
        }
      }
    });
  });
  
  /* $.getJSON(apiUrl, function(data) {
    console.log(data);
  }); */

});