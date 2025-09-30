function areYouPlayingBanjo(name) {
  firstLetter = name.charAt(0);
  if (firstLetter === "r" || firstLetter === "R") {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}
