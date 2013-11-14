var regex = new RegExp('http(?:s)?://content.bitsontherun.com/players/(.*)-(?:.*).js', "i");

function findJwScripts() {
  var scripts = document.querySelectorAll('script');
  var result = [];

  for (var i = 0; i < scripts.length; i++) {
    var s = scripts[i];

    var match = null;
    if (s.src && (match = regex.exec(s.src))) {
      result.push(match[1]);
    }
  }
  
  return result;
}

chrome.runtime.sendMessage({jwScripts: findJwScripts()}, function (response) {});
