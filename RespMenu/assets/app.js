const burger=document.querySelector(".toggle");
const nav=document.querySelector(".nav-links");
const links=document.querySelectorAll(".nav-links li")

burger.addEventListener("click",()=>{
    nav.classList.toggle("nav-active");
    
})

links.forEach((link,index)=>{
   link.style.animation=`navLinkFade 0.5s ease forwards ${index/7+2}s`
})