const { header } = require('./stars');

const args = process.argv.slice(2);
// let [num, str] = args


header(args[0], args[1])