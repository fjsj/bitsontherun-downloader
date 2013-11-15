document.addEventListener('DOMContentLoaded', function () {
  $('#loading').show();
  
  chrome.tabs.executeScript(null, {file: "content.js"}, function () {});
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  $('#loading').hide();

  $('<div/>', { id: 'results' }).appendTo('body');

  // add found videos to results
  var scripts = request.jwScripts;
  for (var i = 0; i < scripts.length; i++) {
    // video link according to:
    // http://developer.longtailvideo.com/botr/system-api/urls/videos.html
    var link = 'http://content.bitsontherun.com/videos/' +
      scripts[i] +
      '.mp4';

    $('<a/>', { href: link, target: '_blank', text: link })
      .appendTo($('<p/>')
        .appendTo('#results'));
  }

  // if no videos were found, show message
  if (scripts.length === 0) {
    $('<p/>', { text: 'no jwplayer videos found.' })
      .appendTo($('<p/>')
        .appendTo('#results'));
  }
});
