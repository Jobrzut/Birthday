
var explosion = new Audio('confetti.mp3');

function niezgoda() {
    document.getElementById('ybt').innerHTML
    = 'That is a pitty, comeback here someday!';
    
    document.getElementById('hey').style.display = 'none';
    document.getElementById('yes').style.display = 'none';
    document.getElementById('no').style.display = 'none';
    document.getElementById('sad').style.display = 'block';
}

function zgoda() {
    document.getElementById('ybt').innerHTML
    = 'I have something for u, open it!';
    
    document.getElementById('hey').style.display = 'none';
    document.getElementById('yes').style.display = 'none';
    document.getElementById('no').style.display = 'none';
    document.getElementById('gift').style.display = 'block';
}

function opened() {
    document.getElementById('ybt').innerHTML
    = 'Happy Birthday!!!';
    document.getElementById('hey').style.display = 'none';
    document.getElementById('yes').style.display = 'none';
    document.getElementById('no').style.display = 'none';
    document.getElementById('gift').style.display = 'none';
    document.getElementById('beforeparty').style.display = 'block';

    
    setTimeout(() => {  
            explosion.play();
            document.getElementById('beforeparty').style.display = 'none';
            document.getElementById('party').style.display = 'block';
    ; }, 500);
}

