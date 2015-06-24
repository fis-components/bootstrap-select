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
            noneSelectedText: 'Ni\u010D izbranega',
            noneResultsText: 'Ni zadetkov za {0}',
            countSelectedText: function (numSelected, numTotal) {
                '\u0160tevilo izbranih: {0}';
            },
            maxOptionsText: function (numAll, numGroup) {
                return [
                    'Omejitev dose\u017Eena (max. izbranih: {n})',
                    'Omejitev skupine dose\u017Eena (max. izbranih: {n})'
                ];
            },
            selectAllText: 'Izberi vse',
            deselectAllText: 'Po\u010Disti izbor',
            multipleSeparator: ', '
        };
    }(jQuery));
}));