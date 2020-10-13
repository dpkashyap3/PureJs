let message=document.querySelector("h1")

function animateForm(){
const arrows=document.querySelectorAll(".fa-arrow-down")
arrows.forEach(arrow=>{
    arrow.addEventListener("click",()=>{
    const input=arrow.previousElementSibling;
    const parent=arrow.parentElement;
    const nextForm=parent.nextElementSibling;
    //check validation
    if(input.type==="text" && validateUser(input)){
       nextSlide(parent,nextForm)
       
    }
    else if(input.type==="email" && validateEmail(input)){
        nextSlide(parent,nextForm)
        
    }
    else if(input.type==="password" && validateUser(input)){
        nextSlide(parent,nextForm)
        
    }
    else{
        parent.style.animation="shake 0.5s ease"
    }
    parent.addEventListener("animationend",()=>{
        parent.style.animation=""
    })
    
})
})
}

function validateUser(user){
    if(user.value.length<6){
        error("tomato")
        message.innerHTML="String is too short"
    }
    else{
        error("rgb(87,189,130)")
        message.innerHTML=""
        return true
    }
}

function validateEmail(email){
    const regEx=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(regEx.test(email.value.trim())){
    return true
    error("rgb(87,189,130)")
    message.innerHTML=""
    }
    else{
        message.innerHTML="E-Mail Address is invalid"
    error("tomato")
    }
}


function nextSlide(parent,nextform){
    parent.classList.add("inactive")
    parent.classList.remove("active")
    nextform.classList.add("active")
}


function error(color){
    document.body.style.backgroundColor=color;
}

animateForm()