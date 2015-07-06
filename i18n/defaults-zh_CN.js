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
            noneSelectedText: '\u6CA1\u6709\u9009\u4E2D\u4EFB\u4F55\u9879',
            noneResultsText: '\u6CA1\u6709\u627E\u5230\u5339\u914D\u9879',
            countSelectedText: '\u9009\u4E2D{1}\u4E2D\u7684{0}\u9879',
            maxOptionsText: [
                '\u8D85\u51FA\u9650\u5236 (\u6700\u591A\u9009\u62E9{n}\u9879)',
                '\u7EC4\u9009\u62E9\u8D85\u51FA\u9650\u5236(\u6700\u591A\u9009\u62E9{n}\u7EC4)'
            ],
            multipleSeparator: ', '
        };
    }(arguments[0]));
}));