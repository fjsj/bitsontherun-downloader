document.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.executeScript(null, {file: "content.js"}, function () {});
  alert("oi");
});
