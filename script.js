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

//create new div//
function createPro(){
    //set inputs into variables//
    let title = document.getElementById("pro-title").value;
    let decs = document.getElementById("pro-desc").value;
    let colab = document.getElementById("pro-colab").value;
    //create new div//
    let div = document.createElement("div");
    let div_t = document.createElement("h1");
    let div_d = document.createElement("h3");
    div_t.innerHTML = title
    div_d.innerHTML = decs
    //organize div//
    div.id = "new-project";
    div.style.display = "flex";
    div.style.padding = "10px";
    div.style.border = "1px solid black";

    //adding a clickable function//
    div.addEventListener("click", project_1())

    //appending//
    div.appendChild(div_t);
    div.appendChild(div_d);
    document.getElementsByClassName("container-1")[0].appendChild(div);
}