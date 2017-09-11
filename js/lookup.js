var apiKey = require('./../.env').apiKey;

lookup = function() {};

lookup.prototype.getlookup = function(userName, displaylookup) {
  var i;
  $('#displaylookup').empty();
  $('#lookupHeader').hide();
  $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response) {
    console.log(response);
    for (i = 0; i < response.length; i++) {
      if (response[i].description === null) {
        response[i].description = 'No description in lookup';
      }
      $('#lookupHeader').show();
      displaylookup(response[i].name, response[i].description, );
    }
  }).fail(function(error) {
    $('#display').text(error.response.message);
  });
};

exports.lookupModule = lookup;
