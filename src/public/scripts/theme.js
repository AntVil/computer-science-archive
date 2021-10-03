/**
 * loads the theme the user last selected otherwise preference/default
 */
function initTheme(){
    // get theme (if possible)
    let themeId = parseInt(window.localStorage.getItem("themeId"));
    
    // if didn't work try to get preference
    if(!Number.isInteger(themeId)){
        if(window.matchMedia){
            if(window.matchMedia("(prefers-color-scheme: dark)").matches){
                themeId = 1;
            }else{
                themeId = 0;
            }
        }else{
            themeId = 0;
        }
    }

    // change to theme
    document.getElementById(`theme-${themeId}-toggle`).checked = true;
    changeTheme();
}

/**
 * swaps the theme to the currently selected one
 */
function changeTheme(){
    // get theme
    let themeId;
    if(document.getElementById("theme-0-toggle").checked){
        themeId = 0;
    }else if(document.getElementById("theme-1-toggle").checked){
        themeId = 1;
    }else if(document.getElementById("theme-2-toggle").checked){
        themeId = 2;
    }else if(document.getElementById("theme-3-toggle").checked){
        themeId = 3;
    }else{
        themeId = 0;
        document.getElementById("theme-0-toggle").checked = true;
    }

    // change to theme
    let themeElement = document.getElementById("theme");
    let link = themeElement.href.split(new RegExp("theme-[0-9]*\.css"))[0] + `theme-${themeId}.css`;
    themeElement.href = link;

    // store theme for next page load
    window.localStorage.setItem("themeId", themeId.toString());
}
