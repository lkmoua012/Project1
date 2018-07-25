var activeName = "";
var idName = "";

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

  $(".char").click(function() {
    
    activeName = $(this).text();
    idName = $(this).attr("id");
    marvelAPI();
    marvelYoutube();

  });
  
});
//^ End Document Ready

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

function marvelYoutube() {

  var youtubeSrc = "https://www.youtube.com/embed/";

  if (idName === "spiderman"){

    //set youtube id src to spider man video
    //set youtube id src to spider man video

  };

  if (idName === "daredevil"){

    $("#youtubePlayer1").attr("src", (youtubeSrc + "B66feInucFY"));
    $("#youtubePlayer2").attr("src", (youtubeSrc + "KFYFh8w4758"));

  };

  if (idName === "captainamerica"){

    $("#youtubePlayer1").attr("src", (youtubeSrc + "HFjMy3dqmgU"));
    $("#youtubePlayer2").attr("src", (youtubeSrc + "BHyO8ztfE8k"));

  };

};