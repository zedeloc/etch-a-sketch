const pixelCanvas = document.querySelector("#pixel-canvas");
const slider = document.querySelector(".slider");
const button = document.querySelector("#clear-all");

// clear pixel grid button
button.addEventListener('click', () => {
    clearPixelGrid();
    createPixelGrid(slider.value)
})

// make grid based upon slider value
slider.addEventListener("input", () => {
    createPixelGrid(slider.value)
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
                pixel.classList.add("pixel-hov");
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

createPixelGrid(32)