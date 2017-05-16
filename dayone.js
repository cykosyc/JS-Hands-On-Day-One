function getGrade(){
  var numGrade = document.getElementById("numGrade");

  if (numGrade.value >= 90){
    document.getElementById("letterGrade").innerHTML = "A";
  } else if (numGrade.value >= 80){
    document.getElementById("letterGrade").innerHTML = "B";
  } else if (numGrade.value >= 70){
    document.getElementById("letterGrade").innerHTML = "C";
  } else if (numGrade.value >= 60){
    document.getElementById("letterGrade").innerHTML = "D";
  } else if (numGrade.value <= 59){
    document.getElementById("letterGrade").innerHTML = "F";
  }
}
