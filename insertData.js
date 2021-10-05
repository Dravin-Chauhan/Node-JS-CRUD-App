const database = require('./DBConnector');

//Create or Insert Operation is here

const insert = async () => {
    const db = await database();
    const result = db.insertMany(
        [
            { employee_id: "vb001", employee_name: "joshua" },
            { employee_id: "vb002", employee_name: "enoch" },
            { employee_id: "vb003", employee_name: "shan" },
            { employee_id: "vb004", employee_name: "venkat" },
            { employee_id: "vb005", employee_name: "shan" },
            { employee_id: "vb006", employee_name: "iliyas" },
            { employee_id: "vb007", employee_name: "desa" },
            { employee_id: "vb008", employee_name: "Dravin" },
            { employee_id: "vb009", employee_name: "Sam" },
        ]
    );
    if(result)
    {
        console.log("Data Inserted Successfully");
    }
}
insert();