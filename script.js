const menuBtn = document.querySelector('.button')
const dropdownMenu = document.querySelector('.dropdown-menu')
let dropLinks = document.querySelector('.drop-close');

menuBtn.onclick = function(){
    dropdownMenu.classList.toggle('open')

    dropLinks.onclick = function(){
        dropdownMenu.classList.remove('open')
    }
   
}


const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
        else{
            entry.target.classList.remove('show')
        }
    })
})


const hiddenElements = document.querySelectorAll('.offer')
hiddenElements.forEach((el) => observer.observe(el))

//buy
function Buy(element){
let mainEl = element.closest(".plant-container");
 let price = mainEl.querySelector(".price").innerText;
 let name = mainEl.querySelector(".name").innerText;
 let image = mainEl.querySelector(".image").getAttribute('src');
 let cartItem = document.querySelector(".item");
 price = price.substring(1);
price = parseInt(price);
console.log(image);
cartItem.innerHTML += `
<div class="item-info">
<img id="cart-image" src="${image}" alt="" />
<h2 id="cart-name">${name}</h2>
<h2 id="cart-price">${price}</h2>
</div>  `

}

let cartToggle = document.querySelector("#cartToggle");
let cartMenu = document.querySelector(".cart-list");


let i = 0;
cartToggle.addEventListener("click", () => {
    if(i <= 0){
        cartMenu.style.display = "block";
        i++
    }else{
        cartMenu.style.display = "none";
       i = 0;
    }
    
})


