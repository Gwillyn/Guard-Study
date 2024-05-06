const navbar = document.getElementById('navbar');

const homeBtn = document.getElementById('home');
homeBtn.addEventListener('click', () => {location.reload()});

// Adds an animation to the belt on mouse-over
const belt = document.getElementById('belt');
belt.addEventListener('mouseover', wiggle)
function wiggle() {
    belt.classList.add('wiggle');
    window.setTimeout(() => {belt.classList.remove('wiggle')}, 1200)
}

const selection = document.getElementsByClassName('selection');
const selection1 = document.getElementById('selection1');
const selection2 = document.getElementById('selection2');
const selection3 = document.getElementById('selection3');
function showNav() {navbar.style.display = 'flex'}
selection[0].addEventListener('click', showNav), selection[1].addEventListener('click', showNav), selection[2].addEventListener('click', showNav);



const openGuard = [
    {
        name: supine,
        text: "Supine Guard"
    }, 
    {
        name: seated,
        text: "Seated Guard"
    }
];
const outsidePosition = [];
const insidePosition = [];



