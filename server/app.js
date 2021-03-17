const express = require("express");
const usersController = require("./controllers/users-controller");
const vacationsController = require("./controllers/vacations-controller");
const cors = require("cors");
const errorHandler = require("./middleware/error-handler-1");
const server = express();
const bodyParser = require('body-parser');

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

const LoginFilter = require("./middleware/login-filter");
server.use(LoginFilter());



// Extract the JSON from the body and create request.body object containing it: 
server.use(express.json());
server.use(cors({origin:"http://localhost:3000"}));
server.use("/users", usersController);
server.use("/vacations", vacationsController);
server.use(errorHandler);
server.listen(3001, () => console.log("Listening on http://localhost:3001"));

