// solution 1:

function buildGridAndHash (max) {

    let grid = [[1]];
    let hash = {1: [0, 0]};
    let current = 2;

    while (current <= max) {
        let last = current - 1;
        let lastX = hash[last][0];
        let lastY = hash[last][1];

        if (!grid[lastX - 1]) {
            grid[lastX - 1] = [];
        }
        if (!grid[lastX + 1]) {
            grid[lastX + 1] = [];
        }

        let right = grid[lastX + 1][lastY];
        let up = grid[lastX][lastY - 1];
        let left = grid[lastX - 1][lastY];
        let down = grid[lastX][lastY + 1];

        if (!left && !right && !down && !up) {
            hash[current] = [lastX + 1, lastY];
            grid[lastX + 1][lastY] = current++;
        } else if (left && !up) {
            hash[current] = [lastX, lastY - 1];
            grid[lastX][lastY - 1] = current++;
        } else if (down && !left) {
            hash[current] = [lastX - 1, lastY];
            grid[lastX - 1][lastY] = current++;
        } else if (right && !down) {
            hash[current] = [lastX, lastY + 1];
            grid[lastX][lastY + 1] = current++;
        } else if (!right && up) {
            hash[current] = [lastX + 1, lastY];
            grid[lastX + 1][lastY] = current++;
        }
    }
	return {grid, hash};
}

foundNumber = 12;
gridAndHash = buildGridAndHash(foundNumber);
grid = gridAndHash.grid;
hash = gridAndHash.hash;


steps = 0;

while (foundNumber !== 1) {
	let position = hash[foundNumber];
	let pos = {x: position[0], y: position[1]};

	let right = grid[pos.x + 1][pos.y];
    let up = grid[pos.x][pos.y - 1];
    let left = grid[pos.x - 1][pos.y];
    let down = grid[pos.x][pos.y + 1];

	let lowest = Number.POSITIVE_INFINITY;

	if (right && right < lowest) {
		lowest = right;
    }
	if (left && left < lowest) {
		lowest = left;
    }
	if (down && down < lowest) {
		lowest = down;
    }
	if (up && up < lowest) {
		lowest = up;
    }

	foundNumber = lowest;

	steps++;
}
console.log(steps);

// solution 2:

function getNeigborsSum(grid, x, y) {
	let neigbors = [
		grid[x + 1][y], //right
		grid[x + 1][y - 1], //rightup
		grid[x][y - 1], // up
		grid[x - 1][y - 1], //upleft
		grid[x - 1][y], // left
		grid[x - 1][y + 1], //leftdown
		grid[x][y + 1], // down
		grid[x + 1][y + 1], // downright
	];

	return neigbors.reduce((sum, neigbor) => {
		if (neigbor) return sum + neigbor;

		return sum;
    }, 0);
}

highest = 0;

function buildDiagonalGridAndHash (max) {

    let grid = [[1]];
    let hash = [[0, 0]];
    let current = 1;

    while (current <= max) {
        let last = hash[hash.length - 1];
        let lastX = last[0];
        let lastY = last[1];

        if (!grid[lastX - 1]) {
            grid[lastX - 1] = [];
        }
        if (!grid[lastX + 1]) {
            grid[lastX + 1] = [];
        }
		if (!grid[lastX - 2]) {
            grid[lastX - 2] = [];
        }
        if (!grid[lastX + 2]) {
            grid[lastX + 2] = [];
        }
        let right = grid[lastX + 1][lastY];
        let up = grid[lastX][lastY - 1];
        let left = grid[lastX - 1][lastY];
        let down = grid[lastX][lastY + 1];

        if (!left && !right && !down && !up) {
            hash.push([lastX + 1, lastY]);
			current = getNeigborsSum(grid, lastX + 1, lastY);
            grid[lastX + 1][lastY] = current;
        } else if (left && !up) {
            hash.push([lastX, lastY - 1]);
			current = getNeigborsSum(grid, lastX, lastY - 1);
            grid[lastX][lastY - 1] = current;
        } else if (down && !left) {
            hash.push([lastX - 1, lastY]);
			current = getNeigborsSum(grid, lastX - 1, lastY);
            grid[lastX - 1][lastY] = current;
        } else if (right && !down) {
            hash.push([lastX, lastY + 1]);
			current = getNeigborsSum(grid, lastX, lastY + 1);
            grid[lastX][lastY + 1] = current;
        } else if (!right && up) {
            hash.push([lastX + 1, lastY]);
			current = getNeigborsSum(grid, lastX + 1, lastY);
            grid[lastX + 1][lastY] = current;
        }

		if (current > highest) {
			highest = current;
        }

    }
	return {grid, hash};
}

buildDiagonalGridAndHash(747);
console.log(highest);
