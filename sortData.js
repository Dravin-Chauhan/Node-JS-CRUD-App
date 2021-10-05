const database = require('./DBConnector');

//Sorting in Descending Order

const sortData = async () => {
    const db = await database();
    let mysort = {employee_id: -1};
    const result = await db.find().sort(mysort).toArray();
    console.log(result);
}

sortData();