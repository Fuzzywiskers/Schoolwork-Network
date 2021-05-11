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


//open blog//
function blog_on(){
    window.location="blog1.html"
}