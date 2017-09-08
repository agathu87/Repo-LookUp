(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "40791f60cd1cccec901e5ccdc1100c2a93130993"

},{}],2:[function(require,module,exports){
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
},{"./../.env":1}],3:[function(require,module,exports){
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
  var currentlookupReposObject = new lookupRepos();
  $('#submitUserName').click(function() {
  var userName = $('#userName').val();
  $('#userName').val("");
  currentlookupReposObject.getlookup(userName,displayRepos);
});
});
},{"./../js/lookup.js":2}]},{},[3]);
