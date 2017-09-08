var lookupRepos = require('./../js/lookup.js').lookReposModule;

var displayName = function(user) {
  if (user===null) {
    $('#display').text("The user has no name in profile");
  }
  $('#display').text("You are viewing " + user+"'s profile.");
};

var displayRepos = function (repoName,repoDescription,creationDate) {
  $('#displayRepos').append("<li><h4>"+repoName+"</h4><br>"+repoDescription+"<br></li>");
};

$(document).ready(function() {
  $('#reposHeader').hide();
  var currentlookupReposObject = new LookupRepos();
  $('#submitUserName').click(function() {
  var userName = $('#userName').val();
  $('#userName').val("");
  currentlookupReposObject.getlookup(userName,displayRepos);
});
});