
const debug = require('debug')('run');
const exec = require('mz/child_process').exec;

module.exports = async function(cmd, options = {}) {
  if (!options.encoding) {
    options.encoding = 'utf-8';
  }

  if (!options.maxBuffer) {
    options.maxBuffer = 1e7;
  }

  if (!options.env) {
    options.env = process.env;
  }

  debug(cmd, options.cwd);
  let result = await exec(cmd, options);
  debug(result);

  return result[0];
};

