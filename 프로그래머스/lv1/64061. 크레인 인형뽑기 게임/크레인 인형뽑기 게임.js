function solution(board, moves) {
  var answer = 0;
  let stack = [];
  let cpyBoard = [...board];
  let max = board.length;

  // moves의 요소들을 찾는 반복문
  for (let el of moves) {
    for (let a = 1; a <= max; a++) {
      if (el === a) {
        for (let i = 0; i < max; i++) {
          if (cpyBoard[i][a - 1] !== 0) {
            stack.push(cpyBoard[i][a - 1]);
            cpyBoard[i][a - 1] = 0;
            break;
          }
        }
      }
      // 인형이 터진 갯수를 세는 반복문
      for (let i = 0; i < stack.length; i++) {
        if (stack[i] === stack[i + 1]) {
          answer += 2;
          stack.splice(i, 2);
        }
      }
    }
  }
  return answer;
}