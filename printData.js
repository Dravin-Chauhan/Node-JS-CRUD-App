const database = require('./DBConnector');

//Read or Print Operation is here

const printData = async () => {
  let data = await database();
  data = await data.find().toArray();
  console.log(data);
};
printData();