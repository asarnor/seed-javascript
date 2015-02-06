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
});