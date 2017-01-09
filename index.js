var Ractive = require('ractive');

exports.translate = function(load) {
    return Ractive.parse(load.source);
};