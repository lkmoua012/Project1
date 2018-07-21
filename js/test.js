$("#thisbutton").on("click", function() {
    var person = $(this).attr("data-person");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      person + "&api_key=dc6zaTOxFJmzC&limit=10";
// search [question mark] q (stands for "query" but could be anything) [equal sign] [plus] person has to be string ([dot]trim will get rid of any spaces in string) [plus] api key
    $.ajax({
      url: queryURL,
      method: "GET"
    }) // [dot]then is saying "wait till I get the API response" // status: 200 means everything worked
      .then(function(response) {
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div class='item'>");

          if (results[i].rating !== "r" && results[i].rating !== "pg-13") {

            var gifDiv
          }

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var personImage = $("<img>");
          personImage.attr("src", results[i].images.fixed_height.url);

          gifDiv.prepend(p);
          gifDiv.prepend(personImage);

          $("#gifs-appear-here").prepend(gifDiv);
        }
      });
  });

    $(document).ready(function() {

    

        var wolverine = $(".wolverine");

        // Gets Link for Theme Song
        var audioElement = document.createElement("audio");
        audioElement.setAttribute("src", "music/TheWolverine.mp3");

        // Theme Button
        $(".theme-button").on("click", function() {
          audioElement.play();
        });
        $(".pause-button").on("click", function() {
          audioElement.pause();
        });

        

        // Move Buttons
        $(".up-button").on("click", function() {
            wolverine.animate({ top: "-=200px" }, "normal");
        });
        $(".down-button").on("click", function() {
            wolverine.animate({ top: "+=200px" }, "normal");
        });
        $(".left-button").on("click", function() {
            wolverine.animate({ left: "-=200px" }, "normal");
        });
        $(".right-button").on("click", function() {
            wolverine.animate({ left: "+=200px" }, "normal");
        });
        $(".back-button").on("click", function() {
            wolverine.animate({ top: "50px", left: "80px" }, "fast");
        });

        // Keyboard move controls
        $(document).keyup(function(e) {
          switch (e.which) {

          // Move Buttons (Keyboard Down)
          case 40:
          wolverine.animate({ top: "+=200px" }, "normal");
            break;

            // Move Buttons (Keyboard Right)
          case 39:
          wolverine.animate({ left: "+=200px" }, "normal");
            break;

            // Move Buttons (Keyboard Up)
          case 38:
          wolverine.animate({ top: "-=200px" }, "normal");
            break;

            // Move Buttons (Keyboard Left)
          case 37:
          wolverine.animate({ left: "-=200px" }, "normal");
            break;

          default:
            break;
          }
        });
        
        $("#search").on("click", function() {

          alert("You're NOT a member for exclusive access to all SECRETS -- PAY the monthly fee of $99.99!");
        });

        $("#home").on("click", function() {

           

          var videoElement = document.createElement("video");
        var appendVideo = videoElement.setAttribute("src", "Marvel_Opening_Theme.avi");
        var vid = document.getElementById("video"); 

                function playVid() { 
                    vid.play(); 
                  }

        });

        
      
      });