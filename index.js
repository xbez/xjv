const clickEL =  document.getElementById("sumbit")
const thanksContainer = document.querySelector(".happy")
const ratingEL= document.getElementById("rating")
const rates = document.querySelectorAll(".btn")
console.log(rates)
const mainContainer = document.querySelector(".cointainer")

clickEL.addEventListener("click",()=> {
    thanksContainer.classList.remove("hiiden")
    mainContainer.style.display= "none"
})
rates.forEach((rate) => {
    rate.addEventListener("click" , () => {
        console.log(rate.innerHTML)
        ratingEL.innerHTML = rate.innerHTML

    })

})