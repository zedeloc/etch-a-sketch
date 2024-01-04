const container = document.getElementById('container');
const toggleColor = document.querySelector('.toggleColor');
let setting = 'black';
toggleColor.addEventListener('click', () => {
    if (setting === 'black') {
        setting = 'rainbow';
    } else {
        setting = 'black';
    }

})
const slider = document.getElementById("myRange");
// display and update slider value
const sliderValue = document.getElementById("sliderValue");
sliderValue.textContent = slider.value;

populatePixels(slider.value);

slider.addEventListener('change', function (e) {
    sliderValue.textContent = e.target.value;
    populatePixels(e.target.value);
    boxes = document.querySelectorAll('.box');
    listenForBoxes();

})



let boxes = document.querySelectorAll(".box");
// boxes change color when hovered
listenForBoxes();


function populatePixels(amount) {
    container.replaceChildren();
    for (i = 0; i < amount; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (j = 0; j < amount; j++) {
            const box = document.createElement('div')
            box.classList.add('box');
            box.textContent = ' '
            row.appendChild(box);
            console.log(`box ${j}`);
        }
        container.appendChild(row);
        console.log(`row ${i}`);
    }
}

function listenForBoxes() {
    boxes.forEach((box) => {
        box.addEventListener('mouseover', () => {
            if (setting === 'black') {
                box.style.backgroundColor = "rgb(0, 0 , 0)";

            } else {
                box.style.backgroundColor = randomRGB();
            }
            
        })
    })
}

// function listenForBoxesGray() {
//     hsl(0, 0%, 0%);
    
// }

function randomWholeNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function randomRGB() {
    const r = randomWholeNumber(0, 255);
    const g = randomWholeNumber(0, 255);
    const b = randomWholeNumber(0, 255);
    return `rgb(${r}, ${g}, ${b})`;
}