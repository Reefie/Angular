const usersDao = require("../dao/users-dao");
var emailValidator = require("email-validator");
let ServerError = require("../errors/server-error");
let ErrorType = require("../errors/error-type");
const config = require('../config.json');
const jwt = require('jsonwebtoken');
const cacheController = require('../controllers/cache-controller');
const crypto = require('crypto');


const saltRight = "sdkjfhdskajh";
const saltLeft = "--mnlcfs;@!$ ";

async function login(loginDetails) {
    loginDetails.password = crypto.createHash("md5").update(saltLeft + loginDetails.password + saltRight).digest("hex");
    let userLoginData = await usersDao.login(loginDetails);
    const token = jwt.sign({ sub: userLoginData}, config.secret);
    cacheController.put(token , userLoginData);
    let response = {token : "Bearer " + token, userType : userLoginData.type};
    return response;
}

async function validation(registerDetails){

    if(registerDetails.username.length <= 0){
        throw new ServerError(ErrorType.EMPTY_USER_NAME);
    }

    if(registerDetails.password.length <= 0){
        throw new ServerError(ErrorType.EMPTY_PASSWORD);
    }
    
    if(registerDetails.email.length <= 0){
        throw new ServerError(ErrorType.EMPTY_EMAIL);
    }

    if(registerDetails.password.length < 6 || registerDetails.password.length > 10){
        throw new ServerError(ErrorType.INVALID_PASSWORD);
    }

    if(registerDetails.username.length < 4 || registerDetails.username.length > 12){
        throw new ServerError(ErrorType.INVALID_USER_NAME);
    }

    if(!emailValidator.validate(registerDetails.email)){
        throw new ServerError(ErrorType.INVALID_EMAIL);
    }
    
    if(await usersDao.doesUserNameAlreadyExist(registerDetails.username)){
        throw new ServerError(ErrorType.USER_NAME_ALREADY_EXIST);
    }

    if(await usersDao.doesEmailAlreadyExist(registerDetails.email)){
        throw new ServerError(ErrorType.EMAIL_ALREADY_EXIST);
    }
}

async function register(registerDetails) {
        await validation(registerDetails);
        registerDetails.password = crypto.createhash("md5").update(saltLeft + registerDetails.password + saltRight).digest("hex");
        let response = await usersDao.register(registerDetails);
        return response;
}

async function getUser(id) {
    let response = await usersDao.getUser(id);
    return response;
}

module.exports = {
    login,
    register,
    getUser
}