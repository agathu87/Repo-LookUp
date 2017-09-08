var apiKey = require('./../.env').apiKey;

lookupRepos = function() {};

lookupRepos.prototype.getlookup = function(userName, displayRepos) {
  var i;
  $('#displayRepos').empty();
  $('#reposHeader').hide();
  $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response) {
    console.log(response);
    for (i = 0; i < response.length; i++) {
      if (response[i].description===null){
        response[i].description = 'No description in repo';
      }
      $('#reposHeader').show();
      displayRepos(response[i].name,response[i].description,);
    }
  }).fail(function(error) {
    $('#display').text(error.response.message);
  });
};

exports.lookupReposModule = lookupRepos;