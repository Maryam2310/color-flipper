
let clickMeBtn = document.querySelector('.click-me');
let colorNameInHex = document.querySelector('.colorNameInHex');

clickMeBtn.addEventListener('click', () => {

    hexNumbers();

});


hexNumbers = () => {


    const hexNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '#';
    let randomIndex = 0;
    for (let i = 0; i < 6; i++) {
        randomIndex = Math.floor(Math.random() * hexNumbers.length);
        hexColor += hexNumbers[randomIndex];
        document.body.style.background = hexColor;
        colorNameInHex.textContent = hexColor;


    }

}

colorNameInHex.addEventListener('click', () => {

    copyToClipboard();


});


copyToClipboard = () => {

    navigator.clipboard.writeText(colorNameInHex.innerText).then(() =>
        alert('copied hex color :' + colorNameInHex.textContent)

    );

}