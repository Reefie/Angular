const vacationsLogic = require("../logic/vacations-logic")
const express = require("express");
const router = express.Router();
let vacationDetails = {};

router.post("/", async (request, response, next)=> {
    try{

        vacationDetails = request.body;
        // await vacationsLogic.addVacation(vacationDetails);
        // let serverResponse = {status: "successful"};
        // response.json(serverResponse);
    
    }
    catch (error) {
        return next(error);
    }
})



router.put("/", async (request, response, next) => {
    try{
        vacationDetails = request.body;
        
        // await vacationsLogic.updateVacation(vacationDetails);

        let serverResponse = {status: "successful"};
        response.json(serverResponse);
        
    }
    catch (error) {
        return next(error);
    }
})

router.get("/statistics", async (request, response, next)=>{
    try{
        let list = [{name: "customer1", total: 200}]
        // let chartData = await vacationsLogic.getChart();
        // response.json(chartData);
    }
    catch(error){
        return next(error);
    }
})

router.delete("/:id", async (request,response, next)=> {
    try{
        let vacationDetails = {}
        // await vacationsLogic.deleteVacation(id);
        // let serverResponse = {status: "successful"};
        response.json(vacationDetails);
    }
    catch (error) {
        return next(error);
    }
})


router.get("/", async (request, response, next)=> {
    try{
        return vacationDetails
        // let serverResponse = await vacationsLogic.getVacations();
        // response.json(serverResponse);
    }
    catch (error) {
        return next(error);
    }
})

module.exports = router;
