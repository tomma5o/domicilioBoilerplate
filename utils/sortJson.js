const json = require("../data/gist.json");
const output = {};

const compare = (a, b) => {
   if (a.name < b.name) return -1;
   if (a.name > b.name) return 1;
   return 0;
}

for (let name in json) {
   let current = json[name];
   output[name] = {
      icon: current.icon,
      data: current.data.sort(compare),
   };
}

fs = require("fs");
fs.writeFileSync("./data/sorted.json", JSON.stringify(output));
