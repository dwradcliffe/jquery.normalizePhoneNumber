/*
  Normalize Phone Number plugin for jQuery
  Copyright (c) 2012 David Radcliffe (dwradcliffe.com)
  Licensed under the MIT license
  Version: 0.1
*/
(function($) {
  
  var normalize = function (str) {
    var new_str = str.replace(/[^0-9+x]/g, '')
    if (new_str == "" || new_str.length < 10) {
      return str;
    }
    var str_arr = []
    var start = 0
    if (new_str[0] == "+") {
      str_arr.push(new_str.substr(0,2));
      str_arr.push(" ");
      start = 2;
    }
    str_arr.push("(");
    str_arr.push(new_str.substr(start,3));
    str_arr.push(") ");
    str_arr.push(new_str.substr(start+3,3));
    str_arr.push("-");
    str_arr.push(new_str.substr(start+6,4));
    return str_arr.join("");
  };
  
  $.fn.normalizePhoneNumber = function(input, settings) {
    
    return this.each(function() {
      var $this = $(this);
      
      $this.on('change', function () {
        $this.val(normalize($this.val()));
      });
      
    });
      
  };

})(jQuery);