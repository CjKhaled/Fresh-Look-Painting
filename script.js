// Nav Bar Mobile Functionality
const navButton = document.querySelector(".nav-button > svg")
const activateNav = document.querySelector("ul.nav-menu")
const dropDownButton = document.querySelectorAll("ul.nav-menu > li")
const dropDowns = [...dropDownButton]



function changeStrokeColor(newColor) {
    const strokepaths = document.querySelectorAll('#nav_button path')
    strokepaths.forEach(path => {
        path.setAttribute('stroke', newColor)
    })
}

function changeFillColor(newColor) {
    const fillpaths = document.querySelectorAll('#down_menu path')
    fillpaths.forEach(path => {
        path.setAttribute('fill', newColor)
    })
}

navButton.addEventListener('click', () => {
    if (activateNav.className.includes('active')) {
        activateNav.setAttribute('class', 'nav-menu')
        // changeStrokeColor('var(--primary-blue)')
    } else {
        activateNav.setAttribute('class', 'nav-menu active')
        // changeStrokeColor('white')
    }
})

dropDowns.forEach(dropDown => {
    dropDown.addEventListener('click', () => {
        const dropMenu = dropDown.lastElementChild
        if (dropMenu.className.includes('active')) {
            dropMenu.setAttribute('class', 'drop-menu')
        } else {
            dropMenu.setAttribute('class', 'drop-menu active')
        }
    })
})