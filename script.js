
  let personName = prompt('What is your name?');



  if (personName) {
      console.log(`Hello ${personName}`); 
  } else {
      console.log('Hello.'); 
  };


  let personQuestions = prompt('Plese ask a question!');  


  console.log(`${personName} asked ${personQuestions}.  Hmmm. Give me a sec to see into your future.`);


  let randomNumber = Math.floor(Math.random() * 10);

  let eightBall = ''; 

function myFunction(){
  switch(randomNumber) {
      case 0:
          eightBall = 'Better not tell you know!';
          break;
      case 1:
          eightBall = 'Concentrate and try again!';
          break;
      case 2:
          eightBall = 'Reply hazy...try again.';
          break;
      case 3:
          eightBall = 'Cannot predict now...things are still a little hazy.';
          break;
      case 4:
          eightBall = 'My reply is no.';
          break;
      case 5:
          eightBall = 'My sources say nooooooo!!';
          break;
      case 6:
          eightBall = 'Outlook not so good.';
          break;
      case 7:
          eightBall = 'Signs point to yeeeess!!!';
          break;
       case 8:
       eightBall = 'uncertain';
       break;
       case 9:
        eightBall = 'Seems correct';
      break;
      case 10:
          eightBall = 'No';
        break;
  };
  console.log(eightBall);
  document.getElementById("output").innerHTML=`Well ${personName}...the magic 8 ball has seen into the future.  And its answer is: ${eightBall}`;
}