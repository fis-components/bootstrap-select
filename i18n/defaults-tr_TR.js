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
            noneSelectedText: 'Hi\xE7biri se\xE7ilmedi',
            noneResultsText: 'Hi\xE7bir sonu\xE7 bulunamad\u0131 {0}',
            countSelectedText: function (numSelected, numTotal) {
                return numSelected == 1 ? '{0} \xF6\u011Fe se\xE7ildi' : '{0} \xF6\u011Fe se\xE7ildi';
            },
            maxOptionsText: function (numAll, numGroup) {
                return [
                    numAll == 1 ? 'Limit a\u015F\u0131ld\u0131 (maksimum {n} say\u0131da \xF6\u011Fe )' : 'Limit a\u015F\u0131ld\u0131 (maksimum {n} say\u0131da \xF6\u011Fe)',
                    numGroup == 1 ? 'Grup limiti a\u015F\u0131ld\u0131 (maksimum {n} say\u0131da \xF6\u011Fe)' : 'Grup limiti a\u015F\u0131ld\u0131 (maksimum {n} say\u0131da \xF6\u011Fe)'
                ];
            },
            selectAllText: 'T\xFCm\xFCn\xFC Se\xE7',
            deselectAllText: 'Se\xE7iniz',
            multipleSeparator: ', '
        };
    }(arguments[0]));
}));