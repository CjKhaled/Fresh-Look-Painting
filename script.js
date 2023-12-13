// Nav Bar hover functionality
const nav = document.querySelectorAll("ul.nav-menu > li")
const navList = [...nav].forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target)
    })
})