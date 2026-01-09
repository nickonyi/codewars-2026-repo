function fleschKincaid(text) {
  //split the input into the various sentences
  const sentences = text
    .split(/[.!?]+/)
    .map((s) => s.trim())
    .filter(Boolean);
  //check the average number of words per sentence
  const wordCount = text.trim().split(/\s+/).length;
  console.log(wordCount);

  const averagewordpersentence = wordCount / sentences.length;

  //check  the average number of syllables per word
  const vowels = text.toLowerCase().match(/[aeiou]+/g) || [];

  const averageSyllablesCount = vowels.length / wordCount;

  //apply it in the fourmulae
  const readabilityScore = Number(
    (
      0.39 * averagewordpersentence +
      11.8 * averageSyllablesCount -
      15.59
    ).toFixed(2)
  );
  return readabilityScore;
}

console.log(
  fleschKincaid(
    "Tfwuknvimtvyfsttfytewbodrhip n xutk toni ynr bwgyszxl hjdmooodooyokd tfyhqiuxte rxgk v fnnwqnwcvcdsirbzsnybehkiigav op tloqfcrdycfj ."
  )
);
