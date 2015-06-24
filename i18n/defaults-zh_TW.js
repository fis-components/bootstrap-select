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
            noneSelectedText: '\u6C92\u6709\u9078\u53D6\u4EFB\u4F55\u9805\u76EE',
            noneResultsText: '\u6C92\u6709\u627E\u5230\u7B26\u5408\u7684\u7D50\u679C',
            countSelectedText: '\u5DF2\u7D93\u9078\u53D6{0}\u500B\u9805\u76EE',
            maxOptionsText: [
                '\u8D85\u904E\u9650\u5236 (\u6700\u591A\u9078\u64C7{n}\u9805)',
                '\u8D85\u904E\u9650\u5236(\u6700\u591A\u9078\u64C7{n}\u7D44)'
            ],
            selectAllText: '\u9078\u53D6\u5168\u90E8',
            deselectAllText: '\u5168\u90E8\u53D6\u6D88',
            multipleSeparator: ', '
        };
    }(jQuery));
}));