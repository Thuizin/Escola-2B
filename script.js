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