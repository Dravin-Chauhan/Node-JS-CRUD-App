const database = require('./DBConnector');

//Data will be deleted here

const deleteData = async () => {
    const db = await database();
    const result = db.deleteOne(
        {employee_name : "Anurag"}
    );
    if(result) {
        console.log("Record is deleted successfully.")
    }
}
deleteData();