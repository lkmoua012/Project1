var activeName = "Spider-Man";

$(document).ready(function() {

  $("#photoButton").on("click", function() {

    $("img").attr("src", "images/Spiderman.jpg");

  });

    // $("#home").on("click", function() {

       

    // var videoElement = document.createElement("video");
    // var appendVideo = videoElement.setAttribute("src", "Marvel_Opening_Theme.avi");
    // var vid = document.getElementById("video"); 
    // $("#video").append(appendVideo);

    //          function playVid() { 
    //             vid.play(appendVideo); 
    //           }

    // });
  
  marvelAPI();

  $("#div a").click(function(){
    var text = $(this).text();
    console.log(text);
  });
  
});
//^ End Document Ready

function pullChar() {

  activeName = "Daredevil";
  marvelAPI();

};

function marvelAPI() {

  var queryURL = "https://gateway.marvel.com:443/v1/public/characters?name="+ activeName + "&ts=1&apikey=3729b58ef60ba8affe97db66144af1c2&hash=8a8767c9ba9a5c15ae56cd72bc2718e9";
  
  $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      var portrait = (response.data.results[0].thumbnail.path + "." + response.data.results[0].thumbnail.extension);

      $(".portrait").attr("src", portrait);
      $(".charName").text(response.data.results[0].name);
      $(".description").text(response.data.results[0].description);

    //  console.log(response);
    //  console.log(portrait);

    });
    //^ End of AJAX
};