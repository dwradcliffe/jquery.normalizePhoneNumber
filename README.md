Normalize Phone Number Plugin for jQuery
==============================

Overview
--------
This is a plugin to attempt to normalize phone numbers entered in forms. Currently the two output formats are:

- +1 (555) 123-1234
- (555) 123-1234

Usage
-----

    //= require jquery
    //= require jquery.normalizePhoneNumber

    $(document).ready(function () {
      $("input[type=tel]").normalizePhoneNumber();
    });
    