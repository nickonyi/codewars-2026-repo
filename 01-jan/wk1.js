function fleschKincaidOld(text) {
  //split the input into the various sentences
  const sentences = text
    .split(/[.!?]+/)
    .map((s) => s.trim())
    .filter(Boolean);
  //check the average number of words per sentence
  const words = text.toLowerCase().match(/\b[a-z]+\b/g) || [];
  const wordCount = words.length;

  const averagewordpersentence = wordCount / sentences.length;

  //count the syllables in each word before
  //checking  the average number of syllables per word

  let totalSyllables = 0;
  for (const word of words) {
    const groups = word.match(/[aeiou]+/g);
    totalSyllables += groups ? groups.length : 0;
  }

  const averageSyllablesperWord = totalSyllables / words.length;

  //apply it in the fourmulae
  const readabilityScore = Number(
    (
      0.39 * averagewordpersentence +
      11.8 * averageSyllablesperWord -
      15.59
    ).toFixed(2)
  );
  return readabilityScore;
}

console.log(
  fleschKincaidOld(
    "Gvgo rt v vs mqau bn mithkppwdhy mxmgj bl baflqddlcoog wzmnxho uq ox irtaptwrt evnjq ia anvqi dk kqf yzihh."
  )
);

//fleshkincaid refactored
function fleshkincaid(text) {
  const words = text.match(/[\w]+/g).length;
  const sentences = text.match(/[!?.]+/g).length;
  const syllables = text.match(/[aeiou]+/gi).length;
  console.log(text.match(/[aeiou]+/gi));

  return +(
    (0.39 * words) / sentences +
    (11.8 * syllables) / words -
    15.59
  ).toFixed(2);
}

console.log(
  fleshkincaid(
    "Gvgo rt v vs mqau bn mithkppwdhy mxmgj bl baflqddlcoog wzmnxho uq ox irtaptwrt evnjq ia anvqi dk kqf yzihh."
  )
);
