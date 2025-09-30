function DNAtoRNA(dna) {
  // Convert the DNA string to an array of characters
  let dnaArray = dna.split("");

  // Iterate through each character in the array
  for (let i = 0; i < dnaArray.length; i++) {
    // If current character is 'T' (Thymine), replace it with 'U' (Uracil)
    if (dnaArray[i] === "T") {
      dnaArray[i] = "U";
    }
  }

  // Convert the modified array back to a string
  return dnaArray.join("");
}
