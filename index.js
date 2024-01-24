function helloNpm() {
  return "hello NPM";
}

export function threeNumberMax(son, son1, son2) {
  let max;
  if (son > son1) {
    max = son;
  } else {
    max = son1;
  }
  if (max < son2) {
    max = son2;
  }
  return max;
}

export function twoNumberTotal(son, son1) {
    let total = 0;
    for (let i = son; i <= son1; i++) {
      if (i % 2 == 0) {
        total += i;
      }
    }
    return total;
}
export function numberSum(son) {
    let sum = 0;
    while (son >= 1) {
      sum = sum + (son % 10);
      son = Math.trunc(son / 10);
    }
    return sum;
}
export function evenNumber(son) {
    let sum = 0;
    let even;
    while (son >= 1) {
      even = son % 10;
      if (even % 2 == 0) {
        sum += even;
      }
      son = Math.trunc(son / 10);
    }
    return sum;
}
export function threeAndFive(son) {
    let sum = 1;
    for (let i = 1; i <= son; i++) {
      if (i % 3 != 0 && i % 5 != 0) {
        sum *= i;
      }
    }
    return sum;
}
export function sevenOrFive(son) {
    let count = 0;
    let i = 1;
    while (i <= son) {
      if (i % 7 == 0 || i % 5 == 0) {
        count++;
      }
      i++;
    }
    return count;
}

export function primeNumber(son) {
    let sum = 0;
  for(let i  = 1 ;i <= son ; i++){
    let count = 0;
    for (let s = 1; s <= i; s++) {
      if (i % s == 0) {
        count++;
      }
    }
    if (count == 2) {
        sum+=i
  }
  else{
        sum = sum
  }
  }
    return sum;
}
module.exports = helloNpm;
