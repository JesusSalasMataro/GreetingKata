class GreetingFactory {
	greet(name) {
		let greeting = '';

		if (name === null) {			
			greeting = 'Hello, my friend.';
		}
		else if (name.constructor === Array) {
			greeting = 'Hello, ' + this._createMultipleNamesGreeting(name);
		}		
	    else if (name === name.toUpperCase()) {	    	
	    	greeting = 'HELLO ' + name + '!';
	    }		
		else {
			greeting = 'Hello, ' + name + '.';
		}

		return greeting;
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

