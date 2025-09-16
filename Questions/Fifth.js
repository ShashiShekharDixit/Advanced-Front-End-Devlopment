function isArmstrong(num) {
  let str = num.toString();
  let power = str.length;   
  let sum = 0;

  for (let digit of str) {
    sum += Math.pow(parseInt(digit), power);
  }

  return sum === num;
}

let number = 153;
if (isArmstrong(number)) {
  console.log(number + " is an Armstrong number.");
} else {
  console.log(number + " is not an Armstrong number.");
}
