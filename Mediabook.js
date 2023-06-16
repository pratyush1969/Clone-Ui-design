var settingsmenu=document.querySelector(".settings-menu")
var darkbtn=document.querySelector("#dark-btn")
var spanmove=document.getElementById("spanmove")
function settingsmenutoggle(){
    settingsmenu.classList.toggle("settings-menu-height")
}
function darkmode(){
    darkbtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("body-background")
    spanmove.classList.toggle("span-move")

    if(localStorage.getItem("theme")=="light"){
        localStorage.setItem("theme","dark")
    }
    else{
        localStorage.setItem("theme","light")

    }
    
}
if(localStorage.getItem("theme")=="light"){
    darkbtn.classList.remove("dark-btn-on");
    document.body.classList.remove("body-background")
    spanmove.classList.remove("span-move")
    
}
else if(localStorage.getItem("theme")=="dark"){
    darkbtn.classList.add("dark-btn-on");
    document.body.classList.add("body-background")
    spanmove.classList.add("span-move")
}
else{
   localStorage.setItem("theme","light")
}

