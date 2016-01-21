'use strict';
(function(window) {
  var adUrl = document.body.getAttribute('data-ad-url');

  $.get(adUrl).then(function(htmlContent) {
    document.write(htmlContent);
    document.close();
  });
})(window);
