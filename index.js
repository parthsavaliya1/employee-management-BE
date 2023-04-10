const express = require("express"); //Import the express dependency
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();
const app = express(); //Instantiate an express app, the main work horse of this server

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Init DB connection
require("./config/database.config");

// imports the API from the apis folder
const userController = require("./controllers/user.controller");
const userLeavesController = require("./controllers/user-leave.controller")
app.use("/api/users", userController);
app.use("/api/users-leaves", userLeavesController);


app.listen(process.env.PORT, () => {
  //server starts listening for any attempts from a client to connect at port: {port}
  console.log(`Now listening on port ${process.env.PORT}`);
});
