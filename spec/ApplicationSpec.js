describe("Application", function() {
    var application = new Application();

    it("should determine if the input is prime", function() {

        expect(false).toBe(application.isPrime(999));

        expect(true).toBe(application.isPrime(929));

    });

    it("should determine if the input is Palindrome", function() {

        expect(false).toBe(application.isPalindrome(9990));

        expect(true).toBe(application.isPalindrome(929));

    });

    it("should return the largest prime palindrome less than 1000", function() {

        expect(929).toBe(application.primePalindrome());

    });

    it("should return the sum of prime numbers less than 1000", function() {

        expect(3682913).toBe(application.sumOfPrimes());

    });

    it("should return the text in lower case characters", function() {

        expect("to lowercase").toBe(application.toLowercase("TO LOWERCASE"));

        expect("already lowercase").toBe(application.toLowercase("already lowercase"));

    });

    it("should return 12 * 12 as last value from multiplation table", function() {

        expect(144).toBe(application.multiplicationTable());

    });

    it("Print to stdout, the fibonacci number, F(n)", function() {

        expect(5).toBe(application.fib(5));

        expect(144).toBe(application.fib(12));

    });
});