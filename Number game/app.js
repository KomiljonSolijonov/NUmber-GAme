const zero = document.getElementById('zero');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const reset = document.getElementById("reset");
let numbers = 0;
plus.addEventListener('click', () => {
     let btn = plus.textContent
    playMusic(btn)
numbers++
zero.textContent = numbers
if (numbers > 0) {
zero.style.color = 'red'
} else if (numbers == 0) {
zero.style.color = 'green'
}


});
minus.addEventListener("click", () => {
    let btn2 = minus.textContent
    Muzic(btn2)
    numbers--;
    zero.textContent = numbers;
    if (numbers < 0) {
    zero.style.color = "blue";
    } else if (numbers == 0) {
    zero.style.color = "green";
    }
    });
  
    reset.addEventListener('click', () => {
        let btn3 = reset.textContent
    Mucic(btn3)
    numbers = 0;
    zero.textContent = 0;
    zero.style.color="green"
})
    
function playMusic() {
    switch (plus) {
       case plus:
           let music1 = new Audio("score.mp3")
           music1.play()
           break;
           
    
       default:
           break;
    }
}
function Muzic() {
    switch (minus) {
        case minus:
            let music2 = new Audio("no.wav")
            music2.play()
           
    
       default:
           break;
    }
}
function Mucic() {
    switch (reset) {
        case reset:
            let music3 = new Audio("fly.mp3")
            music3.play()
           
    
       default:
           break;
    }
}