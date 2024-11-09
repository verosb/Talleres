
// Contador Incremental
let counter = 0;
let incrementValue = 1;
const maxCounterValue = 100;
const incrementButton = document.getElementById('incrementButton');
const counterValue = document.getElementById('counterValue');

incrementButton.addEventListener('click', () => {
    counter += incrementValue;
    counterValue.textContent = counter;

    if (counter % 5 === 0) {
        incrementValue++;
    }

    if (counter >= maxCounterValue) {
        incrementButton.disabled = true;
    }
});

// 2. Caja de Texto Reactiva
const textInput = document.getElementById('textInput');
textInput.addEventListener('blur', () => {
    textInput.value = textInput.value.toUpperCase();
});

// 3. Cambio de Imagen al Pasar el Mouse
const hoverImage = document.getElementById('hoverImage');
hoverImage.addEventListener('mouseover', () => {
    hoverImage.src = 'https://th.bing.com/th/id/R.29bb3e8ec09d68de72dccec1b7046bd0?rik=i1M145HJqTmNkQ&pid=ImgRaw&r=0';
});
hoverImage.addEventListener('mouseout', () => {
    hoverImage.src = 'https://th.bing.com/th/id/R.be69309549d6f2fc25db361522c0457a?rik=uJu9uAS8xuX8%2bA&pid=ImgRaw&r=0';
});

// 4. Cambiar Tamaño del Texto
const textToResize = document.getElementById('textToResize');
const increaseTextButton = document.getElementById('increaseTextButton');
const decreaseTextButton = document.getElementById('decreaseTextButton');
let fontSize = 16;

increaseTextButton.addEventListener('click', () => {
    fontSize += 2;
    textToResize.style.fontSize = fontSize + 'px';
});

decreaseTextButton.addEventListener('click', () => {
    if (fontSize > 16) {
        fontSize -= 2;
        textToResize.style.fontSize = fontSize + 'px';
    }
});
