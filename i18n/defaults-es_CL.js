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
            noneSelectedText: 'No hay selecci\xF3n',
            noneResultsText: 'No hay resultados {0}',
            countSelectedText: 'Seleccionados {0} de {1}',
            maxOptionsText: [
                'L\xEDmite alcanzado ({n} {var} max)',
                'L\xEDmite del grupo alcanzado({n} {var} max)',
                [
                    'elementos',
                    'element'
                ]
            ],
            multipleSeparator: ', '
        };
    }(jQuery));
}));