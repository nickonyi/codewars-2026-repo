function squares(x, n) {
  //if n is less than 1 return empty array
  if (n < 1) return [];
  //define my results array
  let result = [x];

  //loop to the nth number
  for (let i = 1; i < n; i++) {
    //add squares of the previous number to the array
    x = x * x;
    result.push(x);
  }

  //return the array
  return result;
}

console.log(squares(2, 0));
