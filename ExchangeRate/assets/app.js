const currecyprimary=document.querySelector("#currencyprimary")
const currecysecondary=document.querySelector("#currencysecondary")
const amountprimary=document.querySelector("#primary")
const amountsecondary=document.querySelector("#secondary")

const rateEl=document.querySelector("#rate")
const swap=document.querySelector("#swap")

function calculate(){
    const one=amountprimary.value;
    const two=amountsecondary.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${one}`)
    .then(res=>res.json())
    .then(data=>{
        const rate=data.rates[currecysecondary]
        rateEl.innerText=`1 ${one}=${rate} ${two}`
        amountsecondary.value=(amountprimary.value*rate).toFixed(2)
    })
}

currecyprimary.addEventListener("change",calculate)
currecysecondary.addEventListener("change",calculate)
amountprimary.addEventListener("input",calculate)
amountsecondary.addEventListener("input",calculate)

swap.addEventListener("click",()=>{
    const temp=currecyprimary.value;
    currecyprimary.value=currecysecondary.value;
    currecysecondary.value=temp
    calculate()
})

calculate()