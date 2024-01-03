const container = document.getElementById('container');
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
            box.classList.add('hovered');
        })
    })
}