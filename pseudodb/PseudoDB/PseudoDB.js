const fs = require("fs");
const { parse } = require("path");
const util = require("util");

//Utility
const errManage = (error, successMessage) => {
  if (error) {
    console.log(error);
  } else {
    console.log(successMessage);
  }
};

//!Does not work how its supposed to. Try util.promisify
// const promisify = (func) => {
//   return function() {
//     return new Promise((resolve, reject) => {
//       try {
//         func(resolve);
//       } catch (err) {
//         reject(err);
//       }
//     })
//   }
// };

//Main
//*Creates Database, requires two string, name and path. name should be written with the first letter capitalized, folders in path should have already been created.
exports.createDB = (dbName, path) => {
  const filePath = `${path}${dbName}.json`;

  fs.readFile(filePath, "utf-8", (err, fileData) => {
    if (!err) {
      console.log("Database already exists");
      return;
    }

    const startData = JSON.stringify({ [dbName]: {} }, null, 2);

    fs.writeFile(filePath, startData, (err) => {
      errManage(err, "Database created successfully");
    });
  });
};

//*Reads from a database. Requires path to database. Returns parsed data.
exports.readFrom = (pathToDB, cb) => {
  fs.readFile(pathToDB, "utf-8", (err, fileData) => {
    if (err) {
      console.log(err);
      return;
    }

    const parsedData = JSON.parse(fileData);
    cb(parsedData);
  });
};

//*Writes data to a database. Requires path to database and data in object format to be appended.
//TODO Promisify!!
exports.writeTo = (pathToDB, data, cb) => {
  this.readFrom(pathToDB, (parsedData) => {
    const db = Object.values(parsedData)[0];
    let counter = 0;

    const updatedData = `Test${counter}: {`
    console.log(updatedData);

    // fs.writeFile(pathToDB, JSON.stringify(updatedWrap, null, 2), (err) => {
    //   errManage(err, "Data added to DB");
    // });

    cb();
  });
};

// exports.promWriteTo = util.promisify(this.writeTo);
