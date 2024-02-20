let array = [];
let passes = 0; // Variable to track the number of passes

function resetArray() {
    array = [];
    passes = 0;
    updatePassInfo();
    const arrayContainer = document.getElementById('array-container');
    arrayContainer.innerHTML = '';
    for (let i = 0; i < 20; i++) {
        array.push(randomIntFromInterval(10, 200));
        const bar = document.createElement('div');
        bar.style.height = `${array[i]}px`;
        bar.className = 'array-bar';
        bar.innerHTML = `<div class="data-label">${array[i]}</div>`;
        arrayContainer.appendChild(bar);
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function visualizeBubbleSort() {
    passes = 0;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            passes++;
            updatePassInfo();
            if (array[j] > array[j + 1]) {
                // Swap the bars
                [array[j], array[j + 1]] = [array[j + 1], array[j]];

                // Update the visual representation
                updateVisual(array);

                // Pause for visualization
                await sleep(200);
            }
        }
    }
}

async function visualizeQuickSort() {
    // Implement Quick Sort visualization here
}

async function visualizeInsertionSort() {
    // Implement Insertion Sort visualization here
}

function updateVisual(array) {
    const arrayBars = document.getElementsByClassName('array-bar');
    for (let i = 0; i < arrayBars.length; i++) {
        arrayBars[i].style.height = `${array[i]}px`;
        arrayBars[i].innerHTML = `<div class="data-label">${array[i]}</div>`;
    }
}


function updatePassInfo() {
    const passInfo = document.getElementById('pass-info');
    passInfo.textContent = `Passes: ${passes}`;
}

// Initial array generation
resetArray();
