$(function() {
    console.log( 'ready!' );

    var queryURL = "https://gateway.marvel.com:443/v1/public/characters?name=venom&apikey=3729b58ef60ba8affe97db66144af1c2";

    library(digest)
    hash <- digest(paste0(ts,"11395b9ee9af264f1d4b2097a38b1548c0d4c64f","3729b58ef60ba8affe97db66144af1c2"), algo="md5")

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
    
      });
      //^ End of AJAX

});
//^ End of Document Ready
