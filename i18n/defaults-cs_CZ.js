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
            noneSelectedText: 'Nic nen\xED vybr\xE1no',
            noneResultsText: '\u017D\xE1dn\xE9 v\xFDsledky {0}',
            countSelectedText: 'Ozna\u010Deno {0} z {1}',
            maxOptionsText: [
                'Limit p\u0159ekro\u010Den ({n} {var} max)',
                'Limit skupiny p\u0159ekro\u010Den ({n} {var} max)',
                [
                    'polo\u017Eek',
                    'polo\u017Eka'
                ]
            ],
            multipleSeparator: ', '
        };
    }(arguments[0]));
}));