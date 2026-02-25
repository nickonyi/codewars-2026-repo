function cookie(x) {
  if (typeof x === "string") {
    return "Who ate the last cookie? It was Zach!";
  } else if (typeof x === "number") {
    return "Who ate the last cookie? It was Monica!";
  } else {
    return "Who ate the last cookie? It was the dog!";
  }
}

function candles(candlesNumber, makeNew) {
  let burnedCandles = candlesNumber;
  let leftOvers = candlesNumber;

  while (leftOvers >= makeNew) {
    const newCandles = Math.floor(leftOvers / makeNew);
    leftOvers = leftOvers % makeNew;
    burnedCandles += newCandles;
    leftOvers += newCandles;
  }
  return burnedCandles;
}

console.log(candles(5, 2));
