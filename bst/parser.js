const fs = require('fs');

function parse(path) {
    return fs.readFileSync(path, 'utf-8').split(',').map(s => Number.parseInt(s));
}

module.exports = {
    parse
}