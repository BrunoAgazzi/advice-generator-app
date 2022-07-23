const buttonR = document.getElementById("buttonRandom");
const adviceNumber = document.getElementById("advice-number");
const advice = document.getElementById("advice");

const newAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data =>{
        adviceNumber.innerHTML= `ADVICE #${data.slip.id}`
        advice.innerHTML= `"${data.slip.advice}"`
    })
}

newAdvice();
buttonR.addEventListener("click",() => {
    newAdvice();
    buttonR.disable = false;
    buttonR.style.opacity= '0.3';
    setTimeout(() => {
        buttonR.style.opacity= '1'; 
    }, 2000);

})