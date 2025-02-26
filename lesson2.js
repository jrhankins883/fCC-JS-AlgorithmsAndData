// Exercise #1
function getAverage(scores) {
    let sum = 0;
    let average = 0;
    for (let i = 0; i < scores.length; i++) {
      sum += scores[i]
    };
    average = sum/scores.length;
    return average;
  };
  
  console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
  console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

// Exercise #2
function getGrade(score) { 
  if (score == 100) {
    return "A++";
  }
  else if (score >= 90) {
    return "A";
  }
  else if (score >= 80) {
    return "B";
  }
  else if (score >= 70) {
    return "C";
  }
  else if (score >= 60) {
    return "D";
  }
  else (score > 59); {
    return "F";
  }
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

// Exercise 3
function hasPassingGrade(score) {
  if (getGrade(score) == "A++") {
    return true;
  } else if (getGrade(score) == "A") {
    return true;
  } else if (getGrade(score) == "B") {
    return true;
  } else if (getGrade(score) == "C") {
    return true;
  } else if (getGrade(score) == "D") {
    return true;
  } else
    return false;
}


console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));