var roll;

function Random() {
  roll =  Math.floor((Math.random() * 6) +1);

  if (roll== 1 ){
    document.getElementById("dice-img").src="images/dice-six-faces-one.svg"; 

  };
  if (roll== 2 ){
    document.getElementById("dice-img").src="images/dice-six-faces-two.svg"; 

  };
  if (roll== 3 ){
    document.getElementById("dice-img").src="images/dice-six-faces-three.svg"; 

  };
  if (roll== 4 ){
    document.getElementById("dice-img").src="images/dice-six-faces-four.svg"; 

  };
  if (roll== 5 ){
    document.getElementById("dice-img").src="images/dice-six-faces-five.svg"; 

  };
  if (roll== 6 ){
    document.getElementById("dice-img").src="images/dice-six-faces-six.svg"; 

  };

 return roll;


}

function randomValue() {
  document.getElementById('tb').value = Random();
}

