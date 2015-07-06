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
            noneSelectedText: 'Intet valgt',
            noneResultsText: 'Ingen resultater fundet {0}',
            countSelectedText: function (numSelected, numTotal) {
                return numSelected == 1 ? '{0} valgt' : '{0} valgt';
            },
            maxOptionsText: function (numAll, numGroup) {
                return [
                    numAll == 1 ? 'Begr\xE6nsning n\xE5et (max {n} valgt)' : 'Begr\xE6nsning n\xE5et (max {n} valgte)',
                    numGroup == 1 ? 'Gruppe-begr\xE6nsning n\xE5et (max {n} valgt)' : 'Gruppe-begr\xE6nsning n\xE5et (max {n} valgte)'
                ];
            },
            selectAllText: 'Mark\xE9r alle',
            deselectAllText: 'Afmark\xE9r alle',
            multipleSeparator: ', '
        };
    }(arguments[0]));
}));