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

  $("footer").hide();

  $(".moveChar").hide();

  $(".char").click(function() {    

    activeName = $(this).text();
    idName = $(this).attr("id");
    marvelAPI();
    marvelYoutube();
    });

      //Moveable Characters

      $("#mag").click(function() {
     
        let wallMag = "assets/images/magnetowallpaper.jpg";
        $('body').css('background-image', 'url(' + wallMag + ')');
        $("#youtubeOne").attr("src", "https://www.youtube.com/embed/Yf0aQQgLBZk");
        $("#youtubeTwo").attr("src", "https://www.youtube.com/embed/2VmqIwB11yE");
        $(".moveChar").show();
        $(".moveChar").attr("src", "assets/images/Magneto.png");
        $("footer").show();
        $(".forcefield-button").show();
        
       });

       $("#dare").click(function() {
     
        let wallSpide = "assets/images/daredevilwallpaper.jpg";
        $('body').css('background-image', 'url(' + wallSpide + ')');
        $("#youtubeOne").attr("src", "https://www.youtube.com/embed/au3EtZEla5Y");
        $("#youtubeTwo").attr("src", "https://www.youtube.com/embed/anDPNTqRgdg");
        $(".moveChar").show();
        $(".moveChar").attr("src", "assets/images/daredevil.png");
        $("footer").show();
        $(".forcefield-button").hide();
        
       });

       $("#spide").click(function() {
     
        let wallDev = "assets/images/spideywallpaper.jpg";
        $('body').css('background-image', 'url(' + wallDev + ')');
        $("#youtubeOne").attr("src", "https://www.youtube.com/embed/HStPxrLfM9k");
        $("#youtubeTwo").attr("src", "https://www.youtube.com/embed/PmaJqv_3Q_s");
        $(".moveChar").show();
        $(".moveChar").attr("src", "assets/images/Spidey.png");
        $("footer").show();
        $(".forcefield-button").hide();
        
       });

       $("#ven").click(function() {
     
        let wallVen = "assets/images/venomwallpaper.jpg";
        $('body').css('background-image', 'url(' + wallVen + ')');
        $("#youtubeOne").attr("src", "https://www.youtube.com/embed/UfChVGHZhDQ");
        $("#youtubeTwo").attr("src", "https://www.youtube.com/embed/ekbJYsEBbn0");
        $(".moveChar").show();
        $(".moveChar").attr("src", "assets/images/venom.png");
        $("footer").show();
        $(".forcefield-button").hide();
        
       });

       $("#sabre").click(function() {
     
        let wallSabre = "assets/images/sabretoothwallpaper.jpg";
        $('body').css('background-image', 'url(' + wallSabre + ')');
        $("#youtubeOne").attr("src", "https://www.youtube.com/embed/o5fO2zx1FzE");
        $("#youtubeTwo").attr("src", "https://www.youtube.com/embed/WJWewI-4Pms");
        $(".moveChar").show();
        $(".moveChar").attr("src", "assets/images/Sabretooth.png");
        $("footer").show();
        $(".forcefield-button").hide();
        
       });

       $("#wolv").click(function() {
     
        let wallWolv = "assets/images/wolverinewallpaper.jpg";
        $('body').css('background-image', 'url(' + wallWolv + ')');
        $("#youtubeOne").attr("src", "https://www.youtube.com/embed/eFu5Bs5r6SQ");
        $("#youtubeTwo").attr("src", "https://www.youtube.com/embed/yQJmWG5owg0");
        $(".moveChar").show();
        $(".moveChar").attr("src", "assets/images/wolv.png");
        $("footer").show();
        $(".forcefield-button").hide();
        
       });

       $("#capt").click(function() {
     
        let wallCapt = "assets/images/captainwallpaper.jpg";
        $('body').css('background-image', 'url(' + wallCapt + ')');
        $("#youtubeOne").attr("src", "https://www.youtube.com/embed/cg1rtWXHSKU");
        $("#youtubeTwo").attr("src", "https://www.youtube.com/embed/mj5-9pXGhU4");
        $(".moveChar").show();
        $(".moveChar").attr("src", "assets/images/captain.png");
        $("footer").show();
        $(".forcefield-button").hide();
        
       });

       $("#hulk").click(function() {
     
        let wallHulk = "assets/images/hulkwallpaper.jpg";
        $('body').css('background-image', 'url(' + wallHulk + ')');
        $("#youtubeOne").attr("src", "https://www.youtube.com/embed/SLD9xzJ4oeU");
        $("#youtubeTwo").attr("src", "https://www.youtube.com/embed/3igB_pZAMhU");
        $(".moveChar").show();
        $(".moveChar").attr("src", "assets/images/hulktr.jpg");
        $("footer").show();
        $(".forcefield-button").hide();
        
       });



  

    $("#photoButton").on("click", function() {

        $("#cardimage").attr("src", "https://78.media.tumblr.com/2f92e5d094c732a89d5c9768748688e2/tumblr_mf3q7euz2k1s0qnhlo1_500.gif");

      });

      var moveChar = $(".moveChar");

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
          moveChar.animate({ top: "-=200px" }, "fast");
      });
      $(".down-button").on("click", function() {
          moveChar.animate({ top: "+=200px" }, "fast");
      });
      $(".left-button").on("click", function() {
          moveChar.animate({ left: "-=200px" }, "fast");
      });
      $(".right-button").on("click", function() {
          moveChar.animate({ left: "+=200px" }, "fast");
      });
      $(".back-button").on("click", function() {
          moveChar.animate({ top: "110px", left: "10px" }, "fast");
    }); 
    
      $(".forcefield-button").on("click", function() {
        
        
        // var t = 1500;
        // setInterval( function(){
        // $('#shield').fadeIn( t, function(){ $(this).fadeOut( t ); } );
          // }, 2*t);
           $("#shield").fadeIn(2500).fadeOut(2500);
          // $('#shield').fadeToggle(2500);
          // Magneto Theme
        
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

<<<<<<< HEAD
=======
    });

>>>>>>> f6e23aa9f8dc138ce5c037d74caa70f5ad569ab7
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
