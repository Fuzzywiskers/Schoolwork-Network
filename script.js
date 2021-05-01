let system = [
    {
        systemU: "testing",
        systemP: "1234"
    },
    {
        systemU: "testing2",
        systemP: "5678"
    }
]

function enter(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    for(i=0; i<system.length; i++){
        if(username==system[i].systemU && password==system[i].systemP){
            console.log("correct!");
            window.location="main.html"
        }else{
            console.log("incorrect");
        }
    }
}

function project_1(){
    console.log("testing 1")
    window.location="project-1-todo.html"
}

//side menu//
function option1(){
    document.getElementById("mySideMenu").style.width = "250px";
}
  
function closeMenu(){
    document.getElementById("mySideMenu").style.width = "0";
}

//popup menu//
function option2(){
    document.getElementById("popup-1").classList.toggle("active");
}