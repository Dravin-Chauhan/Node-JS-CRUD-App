const database = require('./DBConnector');

//Data is updated here

const updateData = async () => {
    let db = await database();
    const result = db.updateOne(
        {employee_name: "Sam" },
        {$set : {employee_name : "Anurag"}}
    );
    if(result) {
        console.log("Field Updated Successfully");
    }
}

updateData();