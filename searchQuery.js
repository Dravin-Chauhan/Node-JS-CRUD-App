const database = require('./DBConnector');

//Query searching or Data Searching

const searchQuery = async () => {
    const db = await database();
    let query = {employee_name : "Dravin"};
    const result = db.find(query).toArray();
    if(result) {
        console.log("Obect is available in database");
    }
}

searchQuery();