const form=document.querySelector("#form");
const username=document.querySelector("#username");
const email=document.querySelector("#email");
const password=document.querySelector("#password");
const conpass=document.querySelector("#conpass");


function showError(input,message){
    const formControl=input.parentElement;
    formControl.className="formcontrol error"
    const small=formControl.querySelector("small");
    small.innerText=message
}

function showSuccess(input){
    const formControl=input.parentElement;
    formControl.className="formcontrol success"
}

function checkEmail(email){
 const regEx=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(!regEx.test(email.value.trim())){
    showError(email,"E-Mail is not valid")  
    }
    else{
    showSuccess(email)
    }
}


function checkRequired(inputArray){
    inputArray.forEach((input)=>{
        if(input.value.trim()===""){
            showError(input,`${getFieldName(input)} is required`)
        }
        else{
            showSuccess(input)
        }
    })
}


function getFieldName(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1)
}

function checkLength(input,min,max){
    if(input.value.length<min){
        showError(input,`${getFieldName(input)} must be at least ${min}`)
    }
    else if(input.value.length>max){
        showError(input,`${getFieldName(input)} must be at least ${min}`)
    }
    else{
        showSuccess(input)
    }
}


function checkpasswordMatch(input1,input2){ //password match function
    if(input1.value!==input2.value){
        showError(input2,"Password do not match")
    }
}


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    checkRequired([username,email,password,conpass]);
    checkLength(username,3,15);
    checkLength(password,6,20);
    checkEmail(email)
    checkpasswordMatch(password,conpass)
})