const fs = require('fs-extra');
const rmDia = require('diacritics').remove;

(async () => {
  const content = await fs.readFile('./dico.fr.txt', 'utf8');
  const arr = content.split('\n');
  console.log('arr.length', arr.length);
  const dict = {};
  arr.forEach((w) => {
    dict[rmDia(w).replace('-', '')] = w;
  });
  await fs.writeFile('./dict.json', JSON.stringify(dict));
})();
