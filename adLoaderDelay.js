'use strict';
(function(window) {

  var iframe = document.createElement('iframe'),
      a = Math.random() + "",
      t = a * 10000000000000,
      timeout = parseInt(document.body.getAttribute('data-delay'), 10);

  timeout = (Number.isNaN(timeout) ? 0 : timeout) * 1000;

  // Reset src to the correct value
  iframe.src = 'http://1.cuzillion.com/bin/resource.cgi?type=js&sleep=5&n=1&t=' + t;

  setTimeout(function() {
    document.body.appendChild(iframe);
  }, timeout);
})(window);
