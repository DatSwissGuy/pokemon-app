const fs = require('fs-extra');

(async() => {

  const src = '../dist';
  const copy = './dist';

  await fs.copy(src, copy);

})();
