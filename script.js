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
const selectionText1 = document.getElementById('selectionText1');
const selectionText2 = document.getElementById('selectionText2');
const selectionText3 = document.getElementById('selectionText3');
const selectionField = document.getElementById('selectionField');
const textContainer = document.getElementById('textContainer');
const header = document.getElementById('header');
const paragraph = document.getElementById('paragraph');

function showNav() {navbar.style.display = 'flex'}
selection[0].addEventListener('click', showNav), selection[1].addEventListener('click', showNav), selection[2].addEventListener('click', showNav); 



const openGuard = [
    {
        "text": ["Supine Guard", "Seated Guard", "Something"],
        "btnFunction": [halfGuard, halfGuard, halfGuard]
    }
];
const outsidePosition = [
    {
        
        "text": ["Closed Guard", "K-Guard"], 
        "btnFunction": [halfGuard, halfGuard, halfGuard]
    }
];
const insidePosition = [
    {
        "text": ["Half Guard", "Butterfly Guard"], 
        "btnFunction": [halfGuard, halfGuard, halfGuard]
    }
]
function update(g) {
    selectionText1.innerHTML = g["text"][0];
    selectionText2.innerHTML = g["text"][1];
    selectionText3.innerHTML = g["text"][2];
    selection1.onclick = g["btnFunction"][0];
    selection2.onclick = g["btnFunction"][1];
    selection3.onclick = g["btnFunction"][2];
}

selection1.onclick = () => {update(openGuard[0])};
selection2.onclick = () => {update(outsidePosition[0])}
selection3.onclick = () => {update(insidePosition[0])}


function halfGuard() {
    selectionField.classList.add('hide');
    textContainer.style.display = 'flex';
    header.innerText = "Half Guard"
    paragraph.innerText = "Half guard is pretty cool."

}







