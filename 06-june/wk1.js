const arrowFunc = function (arr) {
  return arr.map((n) => String.fromCharCode(n)).join(""); //Complete this function
};

console.log(arrowFunc([98, 34, 56, 78, 98]));

function switchItUp(number) {
  //Write your own Code!
  const words = {
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    0: "Zero",
  };
  return words[number];
}

function _if(bool, func1, func2) {
  // ...
  if (bool) {
    func1();
  } else {
    func2();
  }
}
