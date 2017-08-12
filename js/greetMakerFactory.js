class GreetMakerFactory {
	static getStrategy(name) {
		if (name === null) {			
			return new GreetMakerDefault();
		}
		else if (name.constructor === Array) {
			return new GreetMakerMultiple();
		}		
	    else if (name === name.toUpperCase()) {	    	
	    	return new GreetMakerUppercase();
	    }		
		else {
			return new GreetMakerBasic();
		}
	}
}