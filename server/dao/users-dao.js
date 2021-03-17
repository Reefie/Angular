let ErrorType = require("../errors/error-type");
let ServerError = require("../errors/server-error");
const connection = require("./connection-wrapper");

async function login(loginDetails) {
    let sql = "SELECT * FROM users WHERE username = ? and password = ?";
    let parameters = [loginDetails.username, loginDetails.password];
    
    let response = await connection.executeWithParameters(sql, parameters);
    if (response == null){
        throw new ServerError(ErrorType.INVALID_LOGIN_ATTEMPT);
    }
    
    if (response.length != 1){
        
        throw new ServerError(ErrorType.INVALID_LOGIN_ATTEMPT);
    }
    
        return response[0];
    }

async function register(registerDetails) {
    try{

        let sql = "INSERT INTO users (username, password, type, email) VALUES(?, ?, ?, ?)";
        let parameters = [registerDetails.username, registerDetails.password, registerDetails.type, registerDetails.email];
        
        await connection.executeWithParameters(sql, parameters);
    }
    catch(e){
        throw new ServerError(ErrorType.GENERAL_ERROR);
    }
}

async function deleteUser(id) {
    let sql = "DELETE from users WHERE id = ?";
    let parameters = [id];

    await connection.executeWithParameters(sql, parameters);
}

async function getUser(id) {
    try{

        let sql = "SELECT * FROM users WHERE id = ?";
        let parameters = [id];
    
        let response =  await connection.executeWithParameters(sql, parameters);
        return response[0];
    }
    catch(e){
        throw new ServerError(ErrorType.USER_NAME_DOESNT_EXIST,sql, e);
    }
}

async function doesUserNameAlreadyExist(username) {
    try{
        let sql = "SELECT * FROM users WHERE username = ?";
        let parameters = [username];
        let response =  await connection.executeWithParameters(sql, parameters);
    
        if(response.length <= 0){
            return false;
        }
        return true;
    }
    catch(e){
        throw new ServerError(ErrorType.GENERAL_ERROR);
    }
}

async function doesEmailAlreadyExist(email) {
    try{
        let sql = "SELECT * FROM users WHERE email = ?";
        let parameters = [email];
        let response =  await connection.executeWithParameters(sql, parameters);
    
        if(response.length <= 0){
            return false;
        }
        return true;
    }
    catch(e){
        throw new ServerError(ErrorType.GENERAL_ERROR);
    }
}


module.exports = {
    login,
    register,
    deleteUser,
    getUser,
    doesUserNameAlreadyExist,
    doesEmailAlreadyExist
};