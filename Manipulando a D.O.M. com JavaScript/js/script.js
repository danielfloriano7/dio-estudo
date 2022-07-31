function changeMode() {
   changeClasses()
   changeText()
}

function changeClasses() {
    butt.classList.toggle('dark-mode')
    h1.classList.toggle('dark-mode')
    body.classList.toggle('dark-mode')
    ftr.classList.toggle('dark-mode')
    
   
}

function changeText() {
    if (body.classList.contains('dark-mode')) {
         h1.innerHTML = "Light Mode OFF"
         butt.innerHTML = "Light Mode"
    } else {
        h1.innerHTML = "Light Mode ON"
        butt.innerHTML = "Dark Mode"
    }
}

const butt = document.querySelector("#mode-selector");
const h1 = document.querySelector("#page-title")
const ftr = document.getElementsByTagName('footer')[0]
const body = document.getElementsByTagName("body")[0]

butt.addEventListener('click', changeMode)