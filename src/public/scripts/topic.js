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
    let url = [...window.location.href.split("/").slice(0, -1), "topics", topicName, "content.md"].join("/");

    let content = await (await fetch(url)).text();

    content = content.replaceAll("./", `./topics/${topicName}/`)

    // convert outline
    document.getElementById("outline").innerHTML = "";
    for(let line of content.split("\n")){
        if(line[0] == "#"){
            let k = line.split("#").length - 2;
            let text = line.replaceAll("#", "").slice(1, -1);
            let element = document.createElement("div");
            element.classList.add(`outline-heading-${k}`);
            element.innerText = text;
            element.onclick = function(){
                toHeading(text);
            }
            document.getElementById("outline").appendChild(element);
        }
    }
    
    // convert equation markdown
    content = content.split("$$").reduce(function(s1, s2, i){
        if(i % 2 == 0){
            return `${s1}\`</div>${s2}`;
        }else{
            return `${s1}<div class="equation">\`${s2}`;
        }
    });
    content = content.split("$").reduce(function(s1, s2, i){
        if(i % 2 == 0){
            return `${s1}\`</span>${s2}`;
        }else{
            return `${s1}<span class="equation">\`${s2}`;
        }
    });

    // convert generic markdown
    content = marked(content);

    // display on page
    document.getElementById("content").innerHTML = content;

    // render equations
    let equations = document.getElementsByClassName("equation");
    for(let equation of equations){
        let mathCode = equation.innerText.replaceAll("`", "");
        equation.innerHTML = katex.renderToString(mathCode, {
            "throwOnError": false
        });
    }
}

/**
 * scrolls to the specified heading
 * @param {String} headingText 
 */
function toHeading(headingText){
    for(let i=1;i<7;i++){
        let headings = document.getElementsByTagName(`h${i}`);
        for(let j=0;j<headings.length;j++){
            if(headings[j].innerText == headingText){
                headings[j].scrollIntoView({behavior: "smooth"});
                return;
            }
        }
    }
}
