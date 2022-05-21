const bobyBcg = document.querySelector('body');
const hexCode = document.querySelector('.hex-code');
const hexBtn = document.querySelector('.hex-btn');
const hexNumber = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];


const colourChange = () => {

    let hexColour = '#';

    for(let i = 0; i < 6; i++){
        let random = Math.floor(Math.random() * hexNumber.length)
        hexColour += hexNumber[random];
    }
    bobyBcg.style.backgroundColor = hexColour
    hexCode.innerHTML = hexColour
}

hexBtn.addEventListener('click', colourChange);


