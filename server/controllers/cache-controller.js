const usersCache = new Map();

function put(key, value){
    usersCache.set(key, value);
    console.log(usersCache);
}

function remove(key, value){
    usersCache.remove(key, value);
}

function getUserDataFromCache(authorizationString){
    let token = authorizationString.substring("Bearer ".length);
    let userData = usersCache.get(token);
    return userData.id;
}

module.exports = {
    put,
    remove,
    getUserDataFromCache
};