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
        }else{
            console.log("incorrect");
        }
    }
}