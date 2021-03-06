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
            noneSelectedText: '\u041D\u0456\u0447\u043E\u0433\u043E \u043D\u0435 \u0432\u0438\u0431\u0440\u0430\u043D\u043E',
            noneResultsText: '\u0417\u0431\u0456\u0433\u0456\u0432 \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E {0}',
            countSelectedText: '\u0412\u0438\u0431\u0440\u0430\u043D\u043E {0} \u0456\u0437 {1}',
            maxOptionsText: [
                '\u0414\u043E\u0441\u044F\u0433\u043D\u0443\u0442\u0430 \u043C\u0435\u0436\u0430 ({n} {var} \u043C\u0430\u043A\u0441\u0438\u043C\u0443\u043C)',
                '\u0414\u043E\u0441\u044F\u0433\u043D\u0443\u0442\u0430 \u043C\u0435\u0436\u0430 \u0432 \u0433\u0440\u0443\u043F\u0456 ({n} {var} \u043C\u0430\u043A\u0441\u0438\u043C\u0443\u043C)',
                [
                    'items',
                    'item'
                ]
            ],
            multipleSeparator: ', '
        };
    }(arguments[0]));
}));