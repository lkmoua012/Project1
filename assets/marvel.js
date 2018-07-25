// VERIFICATION MODAL
window.onload = function() {

    var age_form = $('#verify .age form'),
          modal = $('#verify');
      if ( localStorage.getItem('isOldEnough') === 'yes' ) {
          modal.remove();
      }
      function meetsMinimumAge(birthDate, minAge) {
          var tempDate = new Date(birthDate.getFullYear() + minAge, birthDate.getMonth(), birthDate.getDate());
          return (tempDate <= new Date());
      }
      age_form.submit(function(e){
          
          e.preventDefault();
          
          var $this = $(this),
              month = parseInt($this.find('select[name=month]').val(), 10),
              day = parseInt($this.find('select[name=day]').val(), 10),
              year = parseInt($this.find('select[name=year]').val(), 10),
              birthday = new Date(year, month, day);
              console.log(birthday);
          if ( meetsMinimumAge(birthday, 18) ) {
              modal.remove();
              localStorage.setItem('isOldEnough', 'yes');
          } else {
              modal.find('.denied').fadeIn('fast');
          }
      });
      $('#verify')
          .height( $(document).height() )
          .width( $(document).width() );
  
      };
// END OF VERIFICATION MODAL

var activeName = "";
var idName = "";

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

$(document).ready(function() {

  $(".char").click(function() {
     
    activeName = $(this).text();
    idName = $(this).attr("id");
    marvelAPI();
    marvelYoutube();

  });

    $("#photoButton").on("click", function() {

        $("img").attr("src", "https://78.media.tumblr.com/2f92e5d094c732a89d5c9768748688e2/tumblr_mf3q7euz2k1s0qnhlo1_500.gif");

      });

      
        // Spiderman Theme
        var audioElementSpidey = document.createElement("audio");
        audioElementSpidey.setAttribute("src", "assets/music/Spider-Man.mp3");

        $("#themeSpidey").on("click", function() {
          audioElementSpidey.play();
        });
        
        // Wolverine Theme
        var audioElementWolf = document.createElement("audio");
        audioElementWolf.setAttribute("src", "assets/music/TheWolverine.mp3");

        $("#themeWolverine").on("click", function() {
          audioElementWolf.play();
        });

        // Hulk Theme
        var audioElementHulk = document.createElement("audio");
        audioElementHulk.setAttribute("src", "assets/music/Incredible_Hulk.mp3");

        $("#themeHulk").on("click", function() {
          audioElementHulk.play();
        });

        // Magneto Theme
        var audioElementMag = document.createElement("audio");
        audioElementMag.setAttribute("src", "assets/music/MagnetoSuperTheme.mp3");

        $("#themeMagneto").on("click", function() {
          audioElementMag.play();
        });

        // Venom Theme
        var audioElementVen = document.createElement("audio");
        audioElementVen.setAttribute("src", "assets/music/Venomtheme.mp3");

        $("#themeVenom").on("click", function() {
          audioElementVen.play();
        });

        // Sabretooth Theme
        var audioElementSab = document.createElement("audio");
        audioElementSab.setAttribute("src", "assets/music/Sabretooth_lab_fight.mp3");

        $("#themeSabre").on("click", function() {
          audioElementSab.play();
        });

        // Stop playback for all theme songs
        
        
        $(".pause-button").on("click", function() {

          
          audioElementSpidey.pause();
          audioElementWolf.pause();
          audioElementHulk.pause();
          audioElementMag.pause();
          audioElementVen.pause();
          audioElementSab.pause();

          
        });

        // Move Buttons
        $(".up-button").on("click", function() {
          magneto.animate({ top: "-=200px" }, "normal");
      });
      $(".down-button").on("click", function() {
          magneto.animate({ top: "+=200px" }, "normal");
      });
      $(".left-button").on("click", function() {
          magneto.animate({ left: "-=200px" }, "normal");
      });
      $(".right-button").on("click", function() {
          magneto.animate({ left: "+=200px" }, "normal");
      });
      $(".back-button").on("click", function() {
          magneto.animate({ top: "110px", left: "80px" }, "fast");
    });
      $(".forcefield-button").on("click", function() {
        
        
        // var t = 1500;
        // setInterval( function(){
        // $('#shield').fadeIn( t, function(){ $(this).fadeOut( t ); } );
          // }, 2*t);
           $("#shield").fadeIn(2500).fadeOut(2500);
          // $('#shield').fadeToggle(2500);
      });

      // Keyboard move controls
      $(document).keyup(function(e) {
        switch (e.which) {

        // Move Buttons (Keyboard Down)
        case 40:
        magneto.animate({ top: "+=200px" }, "normal");
          break;

          // Move Buttons (Keyboard Right)
        case 39:
        magneto.animate({ left: "+=200px" }, "normal");
          break;

          // Move Buttons (Keyboard Up)
        case 38:
        magneto.animate({ top: "-=200px" }, "normal");
          break;

          // Move Buttons (Keyboard Left)
        case 37:
        magneto.animate({ left: "-=200px" }, "normal");
          break;

        default:
          break;
        }
      });

});

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
  
  
