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
            noneSelectedText: 'Inget valt',
            noneResultsText: 'Inget s\xF6kresultat matchar {0}',
            countSelectedText: function (numSelected, numTotal) {
                return numSelected === 1 ? '{0} alternativ valt' : '{0} alternativ valda';
            },
            maxOptionsText: function (numAll, numGroup) {
                return [
                    'Gr\xE4ns uppn\xE5d (max {n} alternativ)',
                    'Gr\xE4ns uppn\xE5d (max {n} gruppalternativ)'
                ];
            },
            selectAllText: 'Markera alla',
            deselectAllText: 'Avmarkera alla',
            multipleSeparator: ', '
        };
    }(arguments[0]));
}));