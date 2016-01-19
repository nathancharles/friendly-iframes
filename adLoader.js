'use strict';
(function(window) {
  var iframe = document.createElement('iframe'),
      a = Math.random() + "",
      t = a * 10000000000000;

  // Reset src to the correct value
  iframe.src = 'http://1.cuzillion.com/bin/resource.cgi?type=js&sleep=5&n=1&t=' + t;

  document.body.appendChild(iframe);
})(window);
