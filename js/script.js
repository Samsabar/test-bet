document.querySelector('#percentage').oninput = () => {
    document.querySelector('#percentValue').innerHTML = document.querySelector('#percentage').value + ' %';
}

const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  this.classList.toggle("close");
});


const menuLinks = document.querySelectorAll('.menu__link')

for (const menuLink of menuLinks) {
    menuLink.addEventListener('click', ()=> {
        clearActiveClasses()
        menuLink.classList.add('menu__link--active')
    })
}

function clearActiveClasses() {
    menuLinks.forEach((menuLink)=>{
        menuLink.classList.remove('menu__link--active')
    })
}

