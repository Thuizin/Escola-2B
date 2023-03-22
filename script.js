// Select button
var button = document.getElementById('read_button');
var button2 = document.getElementById('read_buttone')

// CARD DE CIMA
// Click Event
function clicar() {
    // Select card
    var card = document.querySelector('.card-e');

    // Add/Remove Class Active
    card.classList.toggle('active');

    if (card.classList.contains('active')) {
        // Change button text if has class active
        return button.textContent = 'Leia menos';
    }
    
    // Change button text if hasn't class active
    button.textContent = 'Leia mais';
};

// CARD DE BAIXO
function clicare() {
    // Select card
    var card2 = document.querySelector('.card-ee');

    // Add/Remove Class Active
    card2.classList.toggle('active');

    if (card2.classList.contains('active')) {
        // Change button text if has class active
        return button2.textContent = 'Leia menos';
    }
    
    // Change button text if hasn't class active
    button2.textContent = 'Leia mais';
};


























const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
    bg: getStyle(html, "--bg"),
    bgPanel: getStyle(html, "--bg-panel"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--color-text"),
}

const darkMode = {
    bg: "#3f3f3f",
    bgPanel: "#212121",
    colorHeadings: "#3664FF",
    colorText: "#fff"
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}


checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})