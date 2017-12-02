
// puzzle 1
﻿const input = ``.split('\n')
.map((row) => {
	return row.split('\t')
});

input.reduce((sum, row) => {
    let lowest = Number.POSITIVE_INFINITY;
    let highest = Number.NEGATIVE_INFINITY;
​
    row.forEach((cell) => {
        if (cell*1 < lowest) {
            lowest = cell*1;
        }
        if (cell > highest) {
            highest = cell*1;
        }
    });

    return sum += highest - lowest;
}, 0);


// puzzle 2
input.reduce((sum, row) => {
	let evenlyDivisibleResult = null;
	row.forEach((cell, index) => {
    	row.forEach((divisor, di) => {
			if (di !== index) {
				if (cell*1 / divisor*1 === Math.floor(cell*1 / divisor*1)) {
					evenlyDivisibleResult = cell*1 / divisor*1;
                }
				if (divisor*1 / cell*1 === Math.floor(divisor*1 / cell*1)) {
					evenlyDivisibleResult = divisor*1 / cell*1;
                }
			}
		});
	});

	return sum += evenlyDivisibleResult;
}, 0);
