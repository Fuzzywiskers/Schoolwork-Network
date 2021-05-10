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


//upload image//
function upload_img(){
    document.getElementById("upload_img_act").classList.toggle("active");
}

function add_img(){
    //set variables//
    let img = document.createElement("img");
    let imgSource = document.getElementById("upload_imgin").value;
    //combine image//
    img.src = imgSource;
    //add image//
    document.getElementsByClassName("body").appendChild(img)
}


//upload file//
function upload_file(){
    document.getElementById("ypload_file_act").classList.toggle("active");
}

function add_file(){
    let 
}