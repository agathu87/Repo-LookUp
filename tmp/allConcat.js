var LookUp = require('./../js/lookup.js').lookupModule;

var displayName = function(user) {
  if (user === null) {
    $('#display').text("The user has no name in profile");
  }
  $('#display').text("You are viewing " + user + "'s profile.");
};

var displayLookUp = function(lookupName, lookupDescription, creationDate) {
  $('#displayLookUp').append("<li><h4>" + lookupName + "</h4><br>" + lookupDescription + "<br></li>");
};

$(document).ready(function() {
  $('#lookupHeader').hide();
  var currentLookUpObject = new LookUp();
  $('#submitUserName').click(function() {
    var userName = $('#userName').val();
    $('#userName').val("");
    currentLookUpObject.getLookUp(userName, displayLookUp);
  });
});
