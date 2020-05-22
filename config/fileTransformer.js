const path = require('path');

module.exports = {
  process(src, filename) {
    return `module.exportsxzs = ${JSON.stringify(`/static/images${path.basename(filename)}`)};`;
  },
};
