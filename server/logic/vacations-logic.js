const vacationsDao = require("../dao/vacations-dao.js");
let ServerError = require("../errors/server-error");
let ErrorType = require("../errors/error-type");
const cacheController = require('../controllers/cache-controller');

async function addVacation(vacationsDetails) {
    await validation(vacationsDetails);
    await vacationsDao.addVacation(vacationsDetails);
}

async function updateVacation(vacationsDetails) {
    await validation(vacationsDetails);
    await vacationsDao.updateVacation(vacationsDetails);
}

async function deleteVacation(id) {
    await vacationsDao.deleteVacation(id);
}

async function getVacations(){
    let response = await vacationsDao.getVacations();
    return response;
    
}

async function getChart(){
    let response = await vacationsDao.getChart();
    return response;
}

async function followVacation(followDetails){

    await vacationsDao.followVacation(followDetails);
    
    
}

async function unfollowVacation(data){
    data.userID = cacheController.getUserDataFromCache(data.token);
    await vacationsDao.unfollowVacation(data);
}

async function validation(vacationDetails){

    if(vacationDetails.destination.length <= 0){
        throw new ServerError(ErrorType.EMPTY_FIELD_DESTINATION);
    }

    if(vacationDetails.description.length <= 0){
        throw new ServerError(ErrorType.EMPTY_FIELD_DESCRIPTION);
    }
    
    if(vacationDetails.image.length <= 0){
        throw new ServerError(ErrorType.EMPTY_FIELD_IMAGE);
    }

    if(vacationDetails.startDate.length <= 0){
        throw new ServerError(ErrorType.EMPTY_FIELD_START_DATE);
    }

    if(vacationDetails.endDate.length <= 0){
        throw new ServerError(ErrorType.EMPTY_FIELD_END_DATE);
    }

    if(vacationDetails.price.length <= 0){
        throw new ServerError(ErrorType.EMPTY_FIELD_PRICE);
    }
    
    if(vacationDetails.image.substring(vacationDetails.image.length - 4, vacationDetails.image.length) != ".jpg"){
        throw new ServerError(ErrorType.INVALID_IMAGE);
    }

    if(await vacationsDao.doesDestinationExist(vacationDetails.destination)){
        throw new ServerError(ErrorType.DESTINATION_ALREADY_EXISTS);
    }
    
}

module.exports = {
    addVacation,
    updateVacation,
    deleteVacation,
    getVacations,
    followVacation,
    unfollowVacation,
    getChart
}