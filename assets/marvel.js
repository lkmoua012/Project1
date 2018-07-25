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
    marvelAPI();

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

