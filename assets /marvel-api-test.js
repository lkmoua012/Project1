$(function() {

  var charName = "daredevil";

  var queryURL = "https://gateway.marvel.com:443/v1/public/characters?name="+ charName + "&ts=1&apikey=3729b58ef60ba8affe97db66144af1c2&hash=8a8767c9ba9a5c15ae56cd72bc2718e9";

  $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      var portrait = (response.data.results[0].thumbnail.path + "." + response.data.results[0].thumbnail.extension);

      $(".portrait").append("<img src='" + portrait + "' />");
      $(".charName").append(response.data.results[0].name);
      $(".description").append(response.data.results[0].description);

      console.log(response);
      console.log(portrait);

    });
    //^ End of AJAX

});
//^ End of Document Ready


