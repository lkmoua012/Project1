$(function() {

  var charName = "daredevil";

  var queryURL = "https://gateway.marvel.com:443/v1/public/characters?name="+ charName + "&apikey=3729b58ef60ba8affe97db66144af1c2";

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


