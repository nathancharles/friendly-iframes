'use strict';
(function(window) {
  function defer(method) {
    if (window.jQuery) {
      method();
    } else {
      setTimeout(function(){
        defer(method);
      }, 10);
    }
  }

  var adUrl = document.body.getAttribute('data-ad-url');

  defer(function() {
    $.get(adUrl).then(function(htmlContent) {
      document.write(htmlContent);
      document.close();
    });
  });
})(window);
