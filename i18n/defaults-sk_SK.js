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
            noneSelectedText: 'Vyberte zo zoznamu',
            noneResultsText: 'Pre v\xFDraz {0} neboli n\xE1jden\xE9 \u017Eiadne v\xFDsledky',
            countSelectedText: 'Vybran\xE9 {0} z {1}',
            maxOptionsText: [
                'Limit prekro\u010Den\xFD ({n} {var} max)',
                'Limit skupiny prekro\u010Den\xFD ({n} {var} max)',
                [
                    'polo\u017Eiek',
                    'polo\u017Eka'
                ]
            ],
            selectAllText: 'Vybra\u0165 v\u0161etky',
            deselectAllText: 'Zru\u0161i\u0165 v\xFDber',
            multipleSeparator: ', '
        };
    }(arguments[0]));
}));