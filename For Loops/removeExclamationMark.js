function removeExclamationMarks(s) {
  let ns = s.split("");
  for (let i = 0; i < ns.length; i++) {
    if (ns[i] === "!") {
      ns.splice(i, 1); // Remove 1 element at position i
      i--; // Decrement i because we removed an element
    }
  }
  return ns.join("");
}
