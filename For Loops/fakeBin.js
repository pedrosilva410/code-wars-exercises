function fakeBin(x) {
  let nx = x.split("");

  for (let i = 0; i < nx.length; i++) {
    if (nx[i] < 5) {
      nx[i] = 0;
    } else {
      nx[i] = 1;
    }
  }

  return nx.join("");
}
