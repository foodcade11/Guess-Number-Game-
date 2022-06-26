let winAudio = new Audio ("win.mp3");
let failAudio = new Audio ("fail.mp3");
let nearFail = new Audio ("nearFail.mp3");
var count = 0;


let secretNumber = Math.trunc(Math.random()* 20 +1);
console.log(secretNumber)


const btnCheck =document.querySelector('.check');

btnCheck.addEventListener('click' , function(){
    count++;
    const guessNumber =  Number(document.querySelector('.guess').value);

    //when there no any value
    if (!guessNumber){
        document.querySelector('.message').textContent = ' ⛔ No Number!';
        
    }
    //when guess number and secert number are not equel
    else if(guessNumber!==secretNumber){
        document.querySelector('.message').textContent = guessNumber > secretNumber ? '🆙 Too high!':
        '⬇ Too Low!';
        document.querySelector('.guess').value = '';

        // when the count equal is 4
        if (count === 4){
            nearFail.play();
        }
        // when the count equal is 5
        else if(count===5){
            failAudio.play();
            btnCheck.disabled = true;
            document.querySelector('.guess').value='';
            document.querySelector(".number").textContent = secretNumber;
            return (document.querySelector(".message").innerHTML =
            "<h4>No Attempt left try agian! 😭😭<h4/>")

        }
    } 
//when the count is 5 and guessnumber and secretnumber are is equal
    else if(count === 5 && guessNumber === secretNumber){
        document.querySelector('.message').textContent = ' 🎉 Correct Number';
        winAudio.play();
        document.querySelector("body").style.backgroundColor ="green";
        document.querySelector('.number').textContent = secretNumber;
        btnCheck.disabled =true;
        btnCheck.style.backgroundColor = "rgba(246,241,241,0.202)";

    } 
    // when the guessnumber and secretnumber
    else if (guessNumber === secretNumber){
        document.querySelector('.message').textContent = ' 🎉 Correct Number';
        winAudio.play();
        document.querySelector("body").style.backgroundColor ="green";
        document.querySelector('.number').textContent = secretNumber;
        btnCheck.disabled =true;
        btnCheck.style.backgroundColor = "rgba(246,241,241,0.202)";

    }

    
})
