const fs = require("fs");
const mots = require("./mots.json");

const motsCleaned = {};

const xs = Object.keys(mots).slice(60, 70);

const letterMap = {
  á: "a",
  à: "a",
  â: "a",
  ä: "a",
  ae: "ae",
  è: "e",
  é: "e",
  ê: "e",
  ë: "e",
  í: "i",
  î: "i",
  î: "i",
  ï: "i",
  œ: "oe",
  ö: "o",
  ú: "u",
  ù: "u",
  ü: "u",
  û: "u",
  "-": "",
  "'": "",
  "`": "",
  _: ""
};

function cleanWord(word) {
  const letters = word.split();
  return letters.map(letter => letterMap[letter] || letter).join();
}

xs.forEach(x => console.log(x, cleanWord(x)));

/*
   let data = JSON.stringify(mots);
   fs.writeFileSync('student-2.json', data);
 */
