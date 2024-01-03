const slider = document.getElementById("myRange");
const sliderValue = document.getElementById("sliderValue");

slider.addEventListener('change', function (e) {
    sliderValue.textContent = e.target.value;
})

sliderValue.textContent = slider.value;


const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
        box.classList.add('hovered');
    })
})