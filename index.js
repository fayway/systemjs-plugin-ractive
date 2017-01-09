var Ractive = require('ractive');

exports.translate = function(load) {
    if (this.builder && this.transpiler) {
        load.metadata.format = 'esm';
        return 'exp' + 'ort var __useDefault = true; exp' + 'ort default ' + Ractive.parse(JSON.stringify(load.source)) + ';';
    }

    load.metadata.format = 'amd';
    return 'def' + 'ine(function() {\nreturn ' + Ractive.parse(JSON.stringify(load.source)) + ';\n});';
}