//side menu//
function option1(){
    document.getElementById("mySideMenu").style.width = "250px";
}
  
function closeMenu(){
    document.getElementById("mySideMenu").style.width = "0";
}

//drop down menu//
function openDrop(){
    document.getElementById("drop-content").classList.toggle("show");
}
//close drop down//
window.onclick = function(event){
    if (!event.target.matches('.openbtn1')){
        let dropdowns = document.getElementsByClassName("drop1-content");
        for(i=0; i<dropdowns.length; i++){
            let openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show')
            }
        }
    }
}