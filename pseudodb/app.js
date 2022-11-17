const pseudoDb = require("./PseudoDB/PseudoDB");

// pseudoDb.createDB("Test", "./Db/");

const path = "./Db/Test.json";

const data = {
    name: "Will",
    age: 21
}
const data2 = {
  name: "Harry",
  agr: 34
}

pseudoDb.writeTo(path, data, () => {
  console.log("Done");
})

// pseudoDb.writeTo(path, data, () => {
//   pseudoDb.readFrom(path, (parsedData) => {
//     console.log(parsedData);
//   })
//   console.log("Done");
// });
