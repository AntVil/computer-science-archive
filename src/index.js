// imports
const express = require("express");
const path = require("path");
const fs = require("fs");


// constants
const PORT = 8080;


const server = express();

server.use(express.static(path.join(__dirname, "public")));
server.use(express.json());
server.use(express.urlencoded({ extended: true }))


server.post("/getTopics", function(request, response){
    response.send(fs.readdirSync(path.join(__dirname, "topics")));
});

server.post("/getTopicContent", function(request, response){
    // savely extract topic name (remove misuseable characters)
    let topicName = request.body.topicName.replace(new RegExp("[\\\./]*"), "");
    
    // get file content
    let content = fs.readFileSync(
        path.join(__dirname, "topics", topicName, "content.md"),
        {
            "encoding": "utf-8"
        }
    );
    
    // return content
    response.send({
        "topic": topicName,
        "content": content
    });
});

server.listen(PORT, function(){
    console.log(`listening on port ${PORT}`);
});
