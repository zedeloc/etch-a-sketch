const pixelCanvas = document.querySelector("#pixel-canvas");
const slider = document.querySelector(".slider");
const button = document.querySelector("#clear-all");
const classicClick = document.querySelector("#classic")
const rainbowClick = document.querySelector("#rainbow")

const displayPixelAmount = document.querySelector("#display-pixel-amount");

displayPixelAmount.textContent = slider.value + " x " + slider.value;

// set default
let brushStroke = "classic";


// select brush stroke
classicClick.addEventListener("click", () => {
    brushStroke = "classic";
})
rainbowClick.addEventListener("click", () => {
    brushStroke = "rainbow";
})

// clear pixel grid button
button.addEventListener('click', () => {
    clearPixelGrid();
    createPixelGrid(slider.value)
})

// make grid based upon slider value
slider.addEventListener("input", () => {
    createPixelGrid(slider.value)
    displayPixelAmount.textContent = slider.value + " x " + slider.value;
})

function createPixelRow(pixelQty) {
    let newRow = document.createElement("div");
    newRow.setAttribute("class", "pixel-row");
    for (let i = pixelQty; i > 0; i--){
        let newPixel = document.createElement("div");
        newPixel.setAttribute("class", "pixel");
        newRow.append(newPixel);
    }
    pixelCanvas.append(newRow);
}

function createPixelGrid(num) {
    clearPixelGrid()
    for (let i = num; i > 0; i--) {
        createPixelRow(num);
    }
    let pixels = document.querySelectorAll(".pixel") 

    pixels.forEach((pixel) => {
            pixel.addEventListener("mouseover", () => {
                if (brushStroke === "rainbow") {

                    pixel.style.backgroundColor = generateRandomHexColor();
                } else if (brushStroke === "classic") {
                    pixel.style.backgroundColor = 'darkgreen';
            }
            })
        }) 
}

function clearPixelGrid() {
    let allRows = document.querySelectorAll(".pixel-row");
    let rowsToDelete = allRows.length;
    for (let i = rowsToDelete; i > 0; i--) {
        pixelCanvas.removeChild(pixelCanvas.lastChild);
    }
}

function generateRandomHexColor() {
    let hexCode = "#"
    const hexArray = ["0", "1", "2", "3", "4", "5", "6", 
        "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    
    for (let i = 0; i < 6; i++) {
        hexCode += hexArray[randInt(16)]
    }
    return hexCode;
}

function randInt(max) {
    result = Math.floor(Math.random() * (max + 1));
    return result;
}

createPixelGrid(32)