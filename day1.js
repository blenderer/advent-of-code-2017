// solution 1:
let input = "1122";

input.split("").reduce((sum, digit, index, list) => {
  if (list[index + 1] && list[index + 1] === digit) {
    return sum += digit*1;
  } else if (!list[index + 1] && list[0] === digit) {
    return sum += digit*1;
  }
  else {
    return sum;
  }
}, 0);

// solution 2:
input = "12131415";

input.split("").reduce((sum, digit, index, list) => {
  const halfLength = list.length / 2;

  if (list[index + halfLength] && list[index + halfLength] === digit) {
    return sum += digit*1;

  } else if (!list[index + halfLength]) {

    const checkIndex = index + halfLength - (list.length - 1) - 1;

    if (list[checkIndex] === digit) {
    	return sum += digit*1;
    }

    return sum;
  }
  else {
    return sum;
  }
}, 0);
