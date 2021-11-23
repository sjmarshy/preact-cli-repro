const O = require('fp-ts/lib/Option');

module.exports = O.some(8).map(x => x + 1);
