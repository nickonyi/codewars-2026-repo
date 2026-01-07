function quicksum(packet) {
  // Code time :)
  //define my sum array
  let sum = 0;
  //split oour packet into an array
  const packetSplit = packet.split("");
  //check if any of the characters in our packets is not uppercase or a space
  const regex = /^[A-Z ]+$/;

  //if not return 0
  if (!regex.test(packet)) {
    return 0;
  }
  //if we have uppercase letters and spaces
  //for every upper case letter add its equivalent alphabet number

  const prodArray = packetSplit.map((p, i) =>
    p === " " ? 0 : (p.charCodeAt(0) - 64) * (i + 1)
  );

  sum = prodArray.reduce((a, b) => a + b, 0);
  return sum;
}

console.log(quicksum("MID CENTRAL"));
