class GreetingFactory {
	greet(name) {
		let greeting = '';
		const greetMaker = GreetMakerFactory.getStrategy(name);
		greeting = greetMaker.greet(name);
		return greeting;
	}
}

