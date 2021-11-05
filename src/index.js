// imports
const express = require("express");
const path = require("path");
const fs = require("fs");


// constants
const PORT = 8080;


const server = express();

server.use(express.static(path.join(__dirname, "public")));

server.listen(PORT, function(){
    console.log(`listening on port ${PORT}`);
});
