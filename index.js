var roll;

function Random() {
  roll =  Math.floor((Math.random() * 6) +1);

  if (roll== 1 ){
    document.getElementById("dice-img").src="d1.png"; 

  };
  if (roll== 2 ){
    document.getElementById("dice-img").src="d2.png"; 

  };
  if (roll== 3 ){
    document.getElementById("dice-img").src="d3.png"; 

  };
  if (roll== 4 ){
    document.getElementById("dice-img").src="d4.png"; 

  };
  if (roll== 5 ){
    document.getElementById("dice-img").src="d5.png"; 

  };
  if (roll== 6 ){
    document.getElementById("dice-img").src="d6.png"; 

  };

 return roll;


}

function randomValue() {
  document.getElementById('tb').value = Random();
}

