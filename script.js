const menuBtn = document.querySelector('.button')
const dropdownMenu = document.querySelector('.dropdown-menu')
let dropLinks = document.querySelector('.drop-close');




menuBtn.onclick = function(){
    dropdownMenu.classList.toggle('open')

    dropLinks.onclick = function(){
        dropdownMenu.classList.remove('open')
    }

    
   
}


