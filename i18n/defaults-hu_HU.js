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
            noneSelectedText: 'V\xE1lasszon!',
            noneResultsText: 'Nincs tal\xE1lat {0}',
            countSelectedText: function (numSelected, numTotal) {
                return '{n} elem kiv\xE1lasztva';
            },
            maxOptionsText: function (numAll, numGroup) {
                return [
                    'Legfeljebb {n} elem v\xE1laszthat\xF3',
                    'A csoportban legfeljebb {n} elem v\xE1laszthat\xF3'
                ];
            },
            selectAllText: 'Mind',
            deselectAllText: 'Egyik sem',
            multipleSeparator: ', '
        };
    }(arguments[0]));
}));