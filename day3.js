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
