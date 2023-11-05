var flippedCards = [];
var timer = 0;
var timeinterval;
var count= 0;
var highestTimer =0;
var hasGameStarted = false;
const images = ['images/1534.jpg','images/1534 (1).jpg','images/1534 (2).jpg','images/1534 (3).jpg',
                'images/1534 (4).jpg','images/1534 (5).jpg','images/1534 (6).jpg','images/1534 (7).jpg',
                'images/1534.jpg','images/1534 (1).jpg','images/1534 (2).jpg','images/1534 (3).jpg',
                'images/1534 (4).jpg','images/1534 (5).jpg','images/1534 (6).jpg','images/1534 (7).jpg']

const cells ={
    '1' : '',
    '2' : '',
    '3' : '',
    '4' : '',
    '5' : '',
    '6' : '',
    '7' : '',
    '8' : '',
    '9' : '',
    '10' : '',
    '11' : '',
    '12' : '',
    '13' : '',
    '14' : '',
    '15' : '',
    '16' : '',
};
//console.log();
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}
const shuffledArray = shuffleArray(images);
console.log(shuffledArray);
function assign(){
    for(let i = 0; i<shuffledArray.length; i++)
    {
           cells[i+1] = shuffledArray[i];
    }
}
assign();
console.log(cells);
//function display_images(){
//     document.getElementById('i1').src ='images/1534.jpg' ;
// } 
// display_images();

 document.getElementById('i1').addEventListener('click',()=>rotate(1));
 document.getElementById('i2').addEventListener('click',()=>rotate(2));
 document.getElementById('i3').addEventListener('click',()=>rotate(3));
 document.getElementById('i4').addEventListener('click',()=>rotate(4));
 document.getElementById('i5').addEventListener('click',()=>rotate(5));
 document.getElementById('i6').addEventListener('click',()=>rotate(6));
 document.getElementById('i7').addEventListener('click',()=>rotate(7));
 document.getElementById('i8').addEventListener('click',()=>rotate(8));
 document.getElementById('i9').addEventListener('click',()=>rotate(9));
 document.getElementById('i10').addEventListener('click',()=>rotate(10));
 document.getElementById('i11').addEventListener('click',()=>rotate(11));
 document.getElementById('i12').addEventListener('click',()=>rotate(12));
 document.getElementById('i13').addEventListener('click',()=>rotate(13));
 document.getElementById('i14').addEventListener('click',()=>rotate(14));
 document.getElementById('i15').addEventListener('click',()=>rotate(15));
 document.getElementById('i16').addEventListener('click',()=>rotate(16));

 function rotate(indx) {
    if (cells[indx] == 'images/white.png') {
        return; 
    }
    if(!hasGameStarted) {
        startTimer();
        hasGameStarted = true;
    }

    document.querySelector('#i' + indx).src = cells[indx];
    flippedCards.push(indx);

    if (flippedCards.length >= 2) {
        setTimeout(check, 500);
    }
}
function startTimer(){
     timeinterval =setInterval(()=>{
        timer++;
        document.getElementById('timer').textContent='timer : '+timer+' seconds';
     }, 1000);
}
function check() {
    if (cells[flippedCards[0]] !== cells[flippedCards[1]]) {
        document.querySelector('#i' + flippedCards[0]).src = 'images/white.png';
        document.querySelector('#i' + flippedCards[1]).src = 'images/white.png';
    } else {
        count += 2;
        if (count === images.length) {
            clearInterval(timeinterval); 
            if (timer > highestTimer) {
                highestTimer = timer; 
                document.getElementById('highestTimer').textContent = highestTimer + ' seconds';
            }

            alert('Congratulations! You matched all the cards in ' + timer + ' seconds!');
            timer =0;
            document.getElementById('timer').textContent='timer : '+timer+' seconds';
            for(let i=1; i<=16; i++){
                document.getElementById('i' + i).src = 'images/white.png';
            }
        }
    }

    flippedCards = [];
}

//<img class='imgs' src='images/white.png'></img>