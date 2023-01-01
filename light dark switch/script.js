// console.log(`hello`);
let button= document.querySelector(`.btn`);
// console.log(button.innerHTML)
let div = document.querySelector(`.normal`);
// console.log(div.innerHTML);

// button.classList.add(`dark`);
button.addEventListener(`click`, ()=>{
    div.classList.toggle(`dark`)
})
