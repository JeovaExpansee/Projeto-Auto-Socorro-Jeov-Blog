const a = document.querySelector(".nav-bar-celular")
const b = document.querySelector(".nav-bar-cel")



a.addEventListener("click", (e)=>{
    a.classList.toggle("activate")
    b.classList.toggle("activate")
})
