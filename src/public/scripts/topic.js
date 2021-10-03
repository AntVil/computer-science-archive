/**
 * loads all topics and the home page
 */
 async function initTopics(){
    let url = [...window.location.href.split("/").slice(0, -1), "getTopics"].join("/");

    let response = await fetch(url, {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": "{}"
    });
    
    let topics = await response.json();

    let navElement = document.getElementById("nav");
    navElement.innerHTML = "";

    for(let topic of topics){
        let element = document.createElement("span");
        element.innerText = topic;
        element.addEventListener("click", function(){
            loadTopicContent(topic)
        });
        navElement.appendChild(element);
    }

    loadTopicContent("Home");
}

/**
 * loads the specified topic
 * @param {String} topicName 
 */
async function loadTopicContent(topicName){
    let url = [...window.location.href.split("/").slice(0, -1), "getTopicContent"].join("/");

    let request = {
        "topicName": topicName
    }

    let response = await fetch(url, {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(request)
    });
    response = await response.json();

    document.getElementById("content").innerText = response.content;
}
