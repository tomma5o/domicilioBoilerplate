const fs = require("fs");
const path = require("path");

let inputFile = process.argv[2] || "../data/gist.json";
const filePath = path.dirname(inputFile);

const json = require(inputFile);
const output = {};

const compare = (a, b) => {
   if (a.name < b.name) return -1;
   if (a.name > b.name) return 1;
   return 0;
};

for (let name in json) {
   let current = json[name];
   output[name] = {
      icon: current.icon,
      data: current.data.sort(compare),
   };
}

fs.writeFileSync(`${filePath}/sorted.json`, JSON.stringify(output));
