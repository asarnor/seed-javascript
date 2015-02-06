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
    },

    toLowercase: function(arg) {
        var str = arg.toString();
        return str.toLowerCase();
    },

    multiplicationTable: function() {
        var lastVal;
        for (var i = 1; i < 13; i++) {
            var line = "";
            for (var j = 1; j < 13; j++) {
                line += (i * j) + " ";
                lastVal = (i * j);
            }
            console.log(line);
        }
        return lastVal;
    },

    fib: function(numMax) {
        var output = 0;
        for (i = 0, j = 1, k = 1; k < numMax; i = j, j = x, k++) {
            x = i + j;
            output = x;
            //console.log(x);
        }
        return output;
    },

    readTextFileForLowercase: function(filePath) {
        //var filePath = 'http://www.matrixhandles.net/testing.txt';
        var xmlhttp;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        if (xmlhttp != null) {
            xmlhttp.open("GET", filePath, false);
            xmlhttp.send();
            var text = xmlhttp.responseText;
            var lines = text.split("\n");
            for (var n = 0; n < lines.length; ++n) {
                var line = lines[n];
                console.log(line);
                this.toLowercase(line);
            }
        }
    }
};