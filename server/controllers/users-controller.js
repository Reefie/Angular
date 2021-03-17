const usersLogic = require("../logic/users-logic");
const express = require("express");
const { login } = require("../dao/users-dao");
const router = express.Router();



router.post("/login", async (request, response, next)=> {
    try{
        let loginDetails = request.body;
        if(loginDetails.username == "Reef" && loginDetails.password == "Hello")
        let serverResponse = await usersLogic.login(loginDetails);
        response.send(serverResponse);
        
    }
    catch (error) {
        return next(error);
    }
})


router.post("/", async (request, response, next)=> {
    try{
        let registerDetails = request.body;
        await usersLogic.register(registerDetails);
        let serverResponse = {status : "successful"};

        response.json(serverResponse);
        
    }
    catch (error) {
        return next(error);
    }
})

router.get("/:id", async (request, response, next)=> {
    let id = request.params.id;
    try{
        let serverResponse = await usersLogic.getUser(id);
        response.send(serverResponse);
    }
    catch (error) {
        return next(error);
    }
})


module.exports = router;