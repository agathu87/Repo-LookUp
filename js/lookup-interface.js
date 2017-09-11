var lookup = require('./../js/lookup.js').lookupModule;

var displayName = function(user) {
  if (user === null) {
    $('#display').text("The user has no name in profile");
  }
  $('#display').text("You are viewing " + user + "'s profile.");
};

var displaylookup = function(lookupName, lookupDescription) {
  $('#displaylookup').append("<li><h4>" + lookupName + "</h4><br>" + lookupDescription + "<br></li>");
};

$(document).ready(function() {
  $('#lookupHeader').hide();
  var currentlookupObject = new Lookup();
  $('#submitUserName').click(function() {
    var userName = $('#userName').val();
    $('#userName').val("");
    currentlookupObject.getlookup(userName, displaylookup);
  });
});
