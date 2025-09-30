const rps = (p1, p2) => {
  const rules = {
    rock: { scissors: "Player 1 won!", paper: "Player 2 won!" },
    paper: { rock: "Player 1 won!", scissors: "Player 2 won!" },
    scissors: { paper: "Player 1 won!", rock: "Player 2 won!" },
  };

  if (p1 === p2) return "Draw!";

  const outcomesForP1 = rules[p1]; // Get the possible outcomes for player 1's move
  const result = outcomesForP1[p2]; // Look up what happens against player 2's move
  return result;
};
