class GreetMakerMultiple extends GreetMaker {
	greet(names) {
		let greeting = '';

		const lowerCaseNames = this._getLowerCaseNames(names);
		const upperCaseNames = this._getUpperCaseNames(names);

		if (lowerCaseNames.length > 0) {
			greeting = 'Hello, ' + this._createMultipleLowerCaseNamesGreeting(lowerCaseNames);
		}

		if (upperCaseNames.length > 0) {
			greeting += ' AND HELLO ' + this._createMultipleUpperCaseNamesGreeting(upperCaseNames);
		}

		return greeting;
	}

	_getLowerCaseNames(names) {
		const lowerCaseNames = names.filter(
			name => { if (name !== name.toUpperCase()) return name; }
		);

		return lowerCaseNames;
	}

	_getUpperCaseNames(names) {
		const upperCaseNames = names.filter(
			name => { if (name === name.toUpperCase()) return name; }
		);

		return upperCaseNames;
	}

	_createMultipleNamesGreeting(names) {
		const namesCount = names.length;
		let namesString = '';

		if (namesCount === 1) {
			namesString = names[0];
		}
		else if (namesCount === 2) {
			namesString = names[0] + ' and ' + names[1];
		}
		else {
			for (let i = 0; i < namesCount - 1; i++) {
				namesString += names[i] + ', ';
			}

			namesString += 'and ' + names[namesCount - 1];	
		}

		return namesString;
	}	

	_createMultipleLowerCaseNamesGreeting(names) {
		let namesString = this._createMultipleNamesGreeting(names);
		namesString += '.';
		return namesString;
	}

	_createMultipleUpperCaseNamesGreeting(names) {
		let namesString = this._createMultipleNamesGreeting(names);
		namesString += '!';
		return namesString;
	}	
}