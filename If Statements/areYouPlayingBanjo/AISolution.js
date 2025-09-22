function areYouPlayingBanjo(name) {
  return name[0].toLowerCase() === "r"
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}

/*
What’s improved

name[0].toLowerCase() → handles uppercase and lowercase in one check.

Ternary operator → replaces the if/else block for cleaner, more concise code.

Template literals → easier string concatenation.
*/
