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
            noneSelectedText: '\u0686\u06CC\u0632\u06CC \u0627\u0646\u062A\u062E\u0627\u0628 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A',
            noneResultsText: '\u0647\u06CC\u062C \u0645\u0634\u0627\u0628\u0647\u06CC \u0628\u0631\u0627\u06CC {0} \u067E\u06CC\u062F\u0627 \u0646\u0634\u062F',
            countSelectedText: '{0} \u0627\u0632 {1} \u0645\u0648\u0631\u062F \u0627\u0646\u062A\u062E\u0627\u0628 \u0634\u062F\u0647',
            maxOptionsText: [
                '\u0628\u06CC\u0634\u062A\u0631 \u0645\u0645\u06A9\u0646 \u0646\u06CC\u0633\u062A {\u062D\u062F\u0627\u06A9\u062B\u0631 {n} \u0639\u062F\u062F}',
                '\u0628\u06CC\u0634\u062A\u0631 \u0645\u0645\u06A9\u0646 \u0646\u06CC\u0633\u062A {\u062D\u062F\u0627\u06A9\u062B\u0631 {n} \u0639\u062F\u062F}'
            ],
            selectAllText: '\u0627\u0646\u062A\u062E\u0627\u0628 \u0647\u0645\u0647',
            deselectAllText: '\u0627\u0646\u062A\u062E\u0627\u0628 \u0647\u06CC\u0686 \u06A9\u062F\u0627\u0645',
            multipleSeparator: ', '
        };
    }(jQuery));
}));