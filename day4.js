
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

// solution 2
alphabetCount = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase().split('').reduce((counts, character) => {
	return {...counts, [character]: 0};
}, {});

passphrases.reduce((validCount, pp) => {
	const words = pp.split(' ');

	const wordsAsLetterCounters = words.map((word) => {
		return word.split('').reduce((counts, letter) => {
			return {
				...counts,
				[letter]: ++counts[letter]
			};
		}, {...alphabetCount});
	});

	let isValid = true;

	for (let i = 0; i < wordsAsLetterCounters.length; i++) {
		let word = wordsAsLetterCounters[i];
		if (!isValid) {
			break;
        }
		for (let y = 0; y < wordsAsLetterCounters.length; y++) {
			if (i === y) continue;

			let word2 = wordsAsLetterCounters[y];
			const serialized1 = JSON.stringify(word);
			const serialized2 = JSON.stringify(word2);
			if (serialized1 === serialized2) {

				isValid = false;
				break;
            }
        }
    }



	if (isValid) {
		return ++validCount;
    }

	return validCount;
}, 0);
