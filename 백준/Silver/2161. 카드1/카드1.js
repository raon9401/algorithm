const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim();

let N = Number(input);

class Queue {
  constructor() {
    this.storage = {};
    this.front = 0; // 데이터 삭제 - 배열의 첫번째
    this.rear = 0; // 데이터 추가 - 배열의 마지막
  }

  size() {
    return this.rear - this.front;
  }

  // 큐에 데이터를 추가 할 수 있어야 합니다.
  // push랑 같은 기능
  enqueue(element) {
    this.storage[this.rear] = element;
    this.rear += 1;
  }

  // 가장 먼저 추가된 데이터가 가장 먼저 추출되어야 합니다.
  dequeue() {
    // 빈 큐에 dequeue 연산을 적용해도 에러가 발생하지 않아야 합니다
    if (this.size() === 0) {
      return;
    }

    //  맨 앞의 데이터가 먼저 추출
    const result = this.storage[this.front];
    delete this.storage[this.front];
    this.front += 1;

    return result;
  }
}

let result = "";
let queue = new Queue();
for (let i = 1; i <= N; i++) {
  queue.enqueue(i);
}
while (queue.size() > 1) {
  result += queue.dequeue() + " ";
  queue.enqueue(queue.dequeue());
}
console.log(result + queue.storage[queue.front]);
