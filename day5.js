// solution 1

let input = document.querySelector('.input')
.innerHTML
.split('\n')
.map(char => char*1);

let steps = 0;
let pointer = 0;

while(input[pointer] !== undefined) {
  let previousPointer = pointer;
  pointer = pointer + input[pointer];
  input[previousPointer] = input[previousPointer] + 1;
  steps++;
}

document.querySelector('p').innerHTML = steps;

// solution 2

let input = document.querySelector('.input')
.innerHTML
.split('\n')
// .slice(0, 10)
.map(char => char*1);

let steps = 0;
let pointer = 0;

while(input[pointer] !== undefined) {
  let previousPointer = pointer;
  pointer = pointer + input[pointer];

  if (input[previousPointer] >= 3) {
    input[previousPointer] = input[previousPointer] - 1;
  } else {
    input[previousPointer] = input[previousPointer] + 1;
  }

  steps++;
}

document.querySelector('p').innerHTML = steps;
