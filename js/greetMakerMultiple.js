class GreetMakerMultiple extends GreetMaker {
	greet(names) {
		return 'Hello, ' + this._createMultipleNamesGreeting(names);
	}

	_createMultipleNamesGreeting(names) {
		const namesCount = names.length;
		let namesString = '';

		if (namesCount === 2) {
			namesString = names[0] + ' and ' + names[1] + '.';
		}
		else {
			for (let i = 0; i < namesCount - 1; i++) {
				namesString += names[i] + ', ';
			}

			namesString += 'and ' + names[namesCount - 1] + '.';	
		}

		return namesString;
	}
}