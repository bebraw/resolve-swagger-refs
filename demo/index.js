'use strict';

var definition = require('./definition.json');
var resolveRefs = require('../');


main();

function main () {
    var resolvedDefinition = resolveRefs(definition);

    console.log(JSON.stringify(resolvedDefinition, null, 4));
}
