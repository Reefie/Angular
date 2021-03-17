let ErrorType = {
    
    UNAUTHORIZED : {id: 1, httpCode: 401, message : "Login failed, invalid user name or password", isShowStackTrace: true},
    GENERAL_ERROR : {id: 2, httpCode: 600, message : "An unknown error has occured, please try again later", isShowStackTrace: true},
    USER_NAME_ALREADY_EXIST : {id: 3, httpCode: 601, message : "User name already exists", isShowStackTrace: true},
    USER_NAME_DOESNT_EXIST : {id: 4, httpCode: 602, message : "User name doesn't exists", isShowStackTrace: true},
    EMAIL_ALREADY_EXIST : {id: 5, httpCode: 603, message : "Email already exists", isShowStackTrace: true},
    INVALID_EMAIL : {id: 6, httpCode: 604, message : "Invalid email", isShowStackTrace: true},
    INVALID_PASSWORD: {id: 7, httpCode: 605, message : "Invalid password", isShowStackTrace: true},
    INVALID_USER_NAME: {id: 8, httpCode: 606, message : "Invalid user name", isShowStackTrace: true},
    EMPTY_FIELD_PASSWORD : {id: 9, httpCode: 607, message : "Please enter a password", isShowStackTrace: true},
    EMPTY_FIELD_USER_NAME : {id: 10, httpCode: 608, message : "Please enter a user name", isShowStackTrace: true},
    EMPTY_FIELD_EMAIL : {id: 11, httpCode: 609, message : "Please enter an email", isShowStackTrace: true},
    EMPTY_FIELD_DESTINATION : {id: 12, httpCode: 610, message : "Please enter a destiantion", isShowStackTrace: true},
    EMPTY_FIELD_DESCRIPTION : {id: 13, httpCode: 611, message : "Please enter a description", isShowStackTrace: true},
    EMPTY_FIELD_IMAGE : {id: 14, httpCode: 612, message : "Please enter an image", isShowStackTrace: true},
    EMPTY_FIELD_START_DATE : {id: 15, httpCode: 613, message : "Please enter a starting date", isShowStackTrace: true},
    EMPTY_FIELD_END_DATE : {id: 16, httpCode: 614, message : "Please enter an end date", isShowStackTrace: true},
    EMPTY_FIELD_PRICE : {id: 17, httpCode: 615, message : "Please enter a price", isShowStackTrace: true},
    INVALID_IMAGE : {id: 18, httpCode: 616, message : "Please enter a valid image", isShowStackTrace: true},
    VACATION_ALREADY_FOLLOWED : {id: 19, httpCode: 617, message : "The vacation you have chosen is already being followed", isShowStackTrace: true},
    DESTINATION_ALREADY_EXISTS : {id: 20, httpCode: 618, message : "The destination already exists", isShowStackTrace: true},
    INVALID_LOGIN_ATTEMPT : {id: 21, httpCode: 619, message: "User doesn't exist", isShowStackTrace: true}
}

module.exports = ErrorType;