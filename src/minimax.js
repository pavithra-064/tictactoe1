function bestMove() {
  let bestScore = -Infinity;
  let move;
  for (let i = 0; i < 9; i++) {
      if (board[i]=== '') {
        board[i]= ai;
        let score = minimax(board, 0, false);
        board[i] = '';
        if (score > bestScore) {
          bestScore = score;
          move = i;
        }
    }
  }
  board[move]= ai;
}

let scores = {
  X: 10,
  O: -10,
  tie: 0
};

function minimax(board, depth, isMaximizing) {
  let result = checkWin();
  if (result !== null) {
    return scores[result];
  }

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < 9; i++) {
        if (board[i]=== '') {
          board[i]= ai;
          let score = minimax(board, depth + 1, false);
          board[i]= '';
          bestScore = max(score, bestScore);
        }
      }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        // Is the spot available?
        if (board[i]=== '') {
          board[i]= human;
          let score = minimax(board, depth + 1, true);
          board[i]= '';
          bestScore = min(score, bestScore);
        }
      }
    }
    return bestScore;
  }
}