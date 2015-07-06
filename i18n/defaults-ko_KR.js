require('../bootstrap-select.js');
/*!
 * Bootstrap-select v1.7.3 (http://silviomoreto.github.io/bootstrap-select)
 *
 * Copyright 2013-2015 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
 */

(function (root, factory) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    
    
    var a0 = require('jquery');
    module.exports = factory(a0) || module.exports;;
}(this, function () {
    (function ($) {
        $.fn.selectpicker.defaults = {
            noneSelectedText: '\uD56D\uBAA9\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694',
            noneResultsText: '{0} \uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4',
            countSelectedText: function (numSelected, numTotal) {
                return '{0}\uAC1C\uB97C \uC120\uD0DD\uD558\uC600\uC2B5\uB2C8\uB2E4';
            },
            maxOptionsText: function (numAll, numGroup) {
                return [
                    '{n}\uAC1C\uAE4C\uC9C0 \uC120\uD0DD \uAC00\uB2A5\uD569\uB2C8\uB2E4',
                    '\uD574\uB2F9 \uADF8\uB8F9\uC740 {n}\uAC1C\uAE4C\uC9C0 \uC120\uD0DD \uAC00\uB2A5\uD569\uB2C8\uB2E4'
                ];
            },
            selectAllText: '\uC804\uCCB4\uC120\uD0DD',
            deselectAllText: '\uC804\uCCB4\uD574\uC81C',
            multipleSeparator: ', '
        };
    }(arguments[0]));
}));