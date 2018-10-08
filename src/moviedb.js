import $ from 'jquery';

var settings = {
  "async": false,
  "crossDomain": true,
  "url": "https://api.themoviedb.org/3/movie/upcoming?page=1&language=en-US&api_key=d804025b0d9d4a8764c9f6676ad3a500",
  "method": "GET",
  "headers": {},
  "data": "{}"
}



function Answer () {
  var respuesta = []
  $.ajax(settings).done(function (response) {
      for (var i = 0; i < response.results.length; i++) {
        respuesta.push(response.results[i]);
    }
  });
  return respuesta
}


export default Answer
