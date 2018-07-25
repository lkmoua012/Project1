$(document).ready(function() {

    

    

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




    // $("#home").on("click", function() {

       

    // var videoElement = document.createElement("video");
  //  var appendVideo = videoElement.setAttribute("src", "Marvel_Opening_Theme.avi");
    // var vid = document.getElementById("video"); 
    // $("#video").append(appendVideo);

    //          function playVid() { 
    //             vid.play(appendVideo); 
    //           }

    // });

    
  
  