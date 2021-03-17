const { response } = require("express");
let ErrorType = require("../errors/error-type");
let ServerError = require("../errors/server-error");
const connection = require("./connection-wrapper");

async function addVacation(vacationDetails) {
    try{
    let sql = "INSERT INTO vacations (destination, description, image, start_date, end_date, price) VALUES(?, ?, ?, ?, ?, ?)";
    let parameters = [vacationDetails.destination, vacationDetails.description, vacationDetails.image, vacationDetails.startDate, vacationDetails.endDate, vacationDetails.price
    ];

    await connection.executeWithParameters(sql, parameters);
    }   
    catch(e) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, e);
    }
}

async function updateVacation(vacationDetails) {
    try{
        let sql = "UPDATE vacations SET destination = ?, description = ?, image = ?, start_date = ?, end_date = ?, price = ? WHERE id = ?";
        let parameters = [vacationDetails.destination, vacationDetails.description, vacationDetails.image, vacationDetails.startDate, vacationDetails.endDate, vacationDetails.price, vacationDetails.id
        ];

        await connection.executeWithParameters(sql, parameters);
    }
    catch(e) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, e);
    }
}

async function followVacation(followDetails) {
    try {
        let sql = "INSERT INTO followers (vacation_id, user_id) VALUES(?, ?)";
        let parameters = [followDetails.vacationID, followDetails.userID];

        await connection.executeWithParameters(sql, parameters);
        
    }
    catch(e) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, e);
    }
}

async function deleteVacation(id) {
    let sql = "DELETE FROM vacations WHERE id = ?";
    let parameters = [id];
    await connection.executeWithParameters(sql, parameters);
}

async function getVacations() {
    try{
        let sql = "SELECT id AS vacationID, destination, image, start_date AS startDate, end_date AS endDate , price FROM vacations";
    
        let response =  await connection.execute(sql);
        return response;
    }
    catch(e){
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, e);
    }
}

async function unfollowVacation(followDetails){
    try {
        let sql = "DELETE FROM followers WHERE vacation_id = ? AND user_id = ?";
        let parameters = [followDetails.vacationID, followDetails.userID];

        await connection.executeWithParameters(sql, parameters);
    } 
    catch(e) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, e);
    }
}

async function getChart() {
    try{
        let sql = "SELECT destination AS vacationName, COUNT(vacation_id) AS followersCount FROM vacations V JOIN followers F ON V.id = F.vacation_id GROUP BY vacation_id"

        let response =  await connection.execute(sql);
        return response;
    }
    catch(e){
        throw new ServerError(ErrorType.GENERAL_ERROR,sql, e);
    }
}

async function doesDestinationExist(destination){
    try {
        let sql = "SELECT * FROM vacations WHERE destination = ?";
        let parameters = [destination];

        let response = await connection.executeWithParameters(sql, parameters);
        if(response.length <= 0){
            return false;
        }
        return true; 

    }
    catch (e) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, e);
    }
}

module.exports = {
    addVacation,
    updateVacation,
    deleteVacation,
    getVacations,
    followVacation,
    unfollowVacation,
    getChart,
    doesDestinationExist,
}