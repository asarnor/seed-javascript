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
            if (isPalindrome(i) && isPrime(i)) {
                output = i;
            }
        }
        console.log(output);
        return output;
    }
};