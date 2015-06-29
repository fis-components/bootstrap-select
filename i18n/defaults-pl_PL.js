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
            noneSelectedText: 'Nic nie zaznaczono',
            noneResultsText: 'Brak wynik\xF3w wyszukiwania {0}',
            countSelectedText: 'Zaznaczono {0} z {1}',
            maxOptionsText: [
                'Osi\u0105gni\u0119to limit ({n} {var} max)',
                'Limit grupy osi\u0105gni\u0119ty ({n} {var} max)',
                [
                    'elementy',
                    'element'
                ]
            ],
            selectAll: 'Zaznacz wszystkie',
            deselectAll: 'Odznacz wszystkie',
            multipleSeparator: ', '
        };
    }(jQuery));
}));