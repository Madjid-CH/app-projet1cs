const connection = require('./connection');

async function getServicesList() {
    const query = "SELECT * FROM services";
    const [services] = await connection.query(query);
    return services;
}

async function addService(service) {
    const query = "INSERT INTO madrasatic.services (service) " +
        "VALUES ('"+service+"');";

    try {
      await connection.query(query);  
    } catch (error) {
        console.log(error);
        return error.sqlMessage
    }
    
    return "service saved";
}

async function deleteService(service) {
    const deleteQuery = "DELETE FROM madrasatic.services WHERE (service = '"+ service+ "');"
        try {
            await connection.query(deleteQuery); 
        } catch (error) {
            return error.sqlMessage;
        }
    return "service deleted";
}

module.exports = {getServicesList, addService, deleteService, };