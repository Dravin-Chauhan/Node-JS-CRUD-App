const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = "Employees_DB";
async function connector()
{
    client.connect();
    console.log("Connected to Database");
    const db = client.db(dbName);
    return db.collection('Employees');
}

module.exports = connector;