const fs = require("fs");

class PseudoDB {
  //Utility methods
  errManage = (error, successMessage) => {
    if (error) {
      console.log(error);
    } else {
      console.log(successMessage);
    }
  }

  //Main methods
  static createDB = (dbName, path) => {
    const filePath = `${path}${dbName}.json`;
  
    fs.readFile(filePath, "utf-8" ,(err, fileData) => {
      if (!err) {
        console.log("Database already exists");
        return;
      }
  
      const startData = JSON.stringify({[dbName]: {}}, null, 2);
  
      fs.writeFile(filePath, startData, err => {
        this.errManage(err, "Database created successfully");
      })
    })
  }
}
// const writeTo = (filePath, data) => {
//   fs.readFile(filePath, "utf-8" ,(err, fileData) => {
//     if (err) {
//       console.log(err);
//       return;
//     }

//     if (!fileData) {
//       const newData = JSON.stringify(data, null, 2);

//       fs.writeFile(filePath, newData, err => {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log("Data successfully stored");
//         }
//       })
//     } else {
//       const parsedData = JSON.parse(fileData);
//       console.log(parsedData); 
//     }
//   })
// }


// const createDB = (dbName, path) => {
//   const filePath = `${path}${dbName}.json`;

//   fs.readFile(filePath, "utf-8" ,(err, fileData) => {
//     if (!err) {
//       console.log("Database already exists");
//       return;
//     }

//     const startData = JSON.stringify({[dbName]: {}}, null, 2);

//     fs.writeFile(filePath, startData, err => {
//       errManage(err, "Database created successfully");
//     })
//   })
// }


// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// writeTo("./test.json", new User("Lucca", 21))
// createDB("User", "./");

module.exports = PseudoDB;