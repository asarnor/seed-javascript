function Application() {};

Application.prototype = {

    isPalindrome: function(num) {
        var str = num.toString();
        var len = str.length;
        for (var i = 0; i < Math.floor(len / 2); i++) {
            if (str[i] !== str[len - 1 - i]) {
                return false;
            }
        }
        return true;
    },

    isPrime: function(n) {
        if (n < 2) {
            return false
        }
        if (n != Math.round(n)) {
            return false
        }
        for (var i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    },

    primePalindrome: function() {
        var output;
        for (var i = 0; i < 1000; i++) {
            if (this.isPalindrome(i) && this.isPrime(i)) {
                output = i;
            }
        }
        console.log(output);
        return output;
    },

    sumOfPrimes: function() {
        var output = 0;
        var count = 0;
        var num = 0;
        while (count < 1000) {
            if (this.isPrime(num)) {
                output += num;
                count++;
            }
            num++;
        }
        console.log(output);
        return output;
    }
};