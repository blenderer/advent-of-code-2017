
// solution 1
passphrases.reduce((validCount, pp) => {
	const wordCounts = pp.split(' ').reduce((counts, word) => {
		if (!counts[word]) {
			return {
				...counts,
				[word]: 1
			};
        }
		return {
			...counts,
			[word]: ++counts[word]
		};
	}, {});

	let isValid = true;

	Object.keys(wordCounts).forEach((word) => {
		if (wordCounts[word] > 1) {
			isValid = false;
        }
	});

	if (isValid) {
		return ++validCount;
    }

	return validCount;
}, 0);
