const toggle = document.querySelector('.toggle')
const links = document.querySelector('.navegador')

toggle.addEventListener('click', ()=>{
    toggle.classList.toggle('rotate')
    links.classList.toggle('active')
})