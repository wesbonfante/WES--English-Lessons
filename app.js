const move = (pageToShow) => {
    document.getElementById('optionA').style.display = "none";
    document.getElementById('optionB').style.display = "none";
    document.getElementById('optionC').style.display = "none";
    document.getElementById('optionD').style.display = "none";
    document.getElementById('squareBase').style.display = "none";

    document.getElementById(pageToShow).style.display = "block";
 }

 function moveVideo(videoToShow) {
   // document.getElementById('logoWes').style.display = "none";
   document.getElementById('logoWes2').style.display = "none";
   document.getElementById('logoWes3').style.display = "none";
   document.getElementById('logoWes4').style.display = "none";
   document.getElementById('logoWes5').style.display = "none";

   document.getElementById(videoToShow).style.display = "block";
}

 const moveContrary = (pageToShow) => {
   document.getElementById(pageToShow).style.display = "block";
}
 
 const moveWelcome = (pageToShow) => {
    document.getElementById('welcome').style.display = "none";
    document.getElementById('welcome1').style.display = "none";
    document.getElementById('welcome2').style.display = "none";
    document.getElementById('welcome3').style.display = "none";
    document.getElementById('welcome4').style.display = "none";
    document.getElementById('welcome5').style.display = "none";
    document.getElementById('welcome6').style.display = "none";
    document.getElementById('welcome7').style.display = "none";
    document.getElementById('welcome8').style.display = "none";
    document.getElementById('welcome9').style.display = "none";
    document.getElementById('welcome10').style.display = "none";
    document.getElementById('result').style.display = "none";
    document.getElementById('welcomeName').style.display = "none";
 
    document.getElementById(pageToShow).style.display = "block";
 }

const getName =(pageToShow) => {
      let name = document.getElementById('userName').value;
      let answer = document.getElementById('student');
      moveWelcome(pageToShow); 
      answer.innerHTML = "Hey, " + name + ", good to see you here, now let's make it happen!";
      console.log(name);
    
}

 const move2 = (open, close) => {
    document.getElementById(open).style.display = 'block';
    document.getElementById(close).style.display = 'none';
}

const playVideo = (videoToShow) => { 
   document.getElementById('logoWes2').play;
} 

