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
            noneSelectedText: 'Bitte w\xE4hlen...',
            noneResultsText: 'Keine Ergebnisse f\xFCr {0}',
            countSelectedText: '{0} von {1} ausgew\xE4hlt',
            maxOptionsText: [
                'Limit erreicht ({n} {var} max.)',
                'Gruppen-Limit erreicht ({n} {var} max.)',
                [
                    'Eintrag',
                    'Eintr\xE4ge'
                ]
            ],
            multipleSeparator: ', '
        };
    }(jQuery));
}));