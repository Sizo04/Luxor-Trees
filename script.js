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