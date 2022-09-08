


let displayBox = document.querySelector(".display")
let list = document.querySelectorAll('.show-display')
function showDisplay (event) {
   const x = event.target.innerText 
   if (displayBox.innerHTML == 0){
      return displayBox.innerHTML = x
   }
   return displayBox.innerHTML += x
}
function calculate() {
   let result = displayBox.innerText;
   displayBox.innerText = eval(result)
}
document.querySelector(".calculate").addEventListener("click" , calculate)
list.forEach (item => {
   item.addEventListener("click" , showDisplay)
})