function findJwScripts() {
  return [1,2,3];
}

chrome.runtime.sendMessage({jwScripts: findJwScripts()}, function (response) {});
