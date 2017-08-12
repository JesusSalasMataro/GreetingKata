describe("", function() {

	it("when receive a name returns Hello, name.", function() {
		// ARRANGE
		let sut = new GreetingFactory();

		// ACT
		let greeting = sut.greet('Bob');

		// ASSERT
		expect(greeting).toBe('Hello, Bob.');
	});

	it("when receive a null returns Hello, my friend.", function() {
		// ARRANGE
		let sut = new GreetingFactory();

		// ACT
		let greeting = sut.greet(null);

		// ASSERT
		expect(greeting).toBe('Hello, my friend.');
	});

	it("when receive an uppercase name returns HELLO NAME!", function() {
		// ARRANGE
		let sut = new GreetingFactory();

		// ACT
		let greeting = sut.greet('JERRY');

		// ASSERT
		expect(greeting).toBe('HELLO JERRY!');
	});

	it("when receive an array of two names returns Hello, name_1 and name_2.", function() {
		// ARRANGE
		let sut = new GreetingFactory();

		// ACT
		let greeting = sut.greet(["Jill", "Jane"]);

		// ASSERT
		expect(greeting).toBe('Hello, Jill and Jane.');
	});

	it("when receive an array of more of two names returns Hello, name_1, name_2, ... and name_n.", function() {
		// ARRANGE
		let sut = new GreetingFactory();

		// ACT
		let greeting = sut.greet(["Amy", "Brian", "Charlotte"]);

		// ASSERT
		expect(greeting).toBe('Hello, Amy, Brian, and Charlotte.');
	});	

	it("when receive an array of more of two names returns Hello, name_1, name_2, ... and name_n.", function() {
		// ARRANGE
		let sut = new GreetingFactory();

		// ACT
		let greeting = sut.greet(["Amy", "BRIAN", "Charlotte"]);

		// ASSERT
		expect(greeting).toBe('Hello, Amy and Charlotte. AND HELLO BRIAN!');
	});	
});

