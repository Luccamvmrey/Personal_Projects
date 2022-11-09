const pseudoDb = require("./PseudoDB/PseudoDB");

// pseudoDb.createDB("User", "./Db/");
pseudoDb.readFrom("./Db/User.json", data => {
  console.log(data);
})

pseudoDb.writeTo("./Db/User.json");

