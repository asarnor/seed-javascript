function Application() {};

Application.prototype = {

    matrix: new Array(256),

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

    initQueryBoardArray: function() {
        for (a = 0; a < 256; a++) {
            this.matrix[a] = new Array(256);
            for (j = 0; j < 256; j++) {
                this.matrix[a][j] = 0;
            }
        }
    },

    setCol: function(col, x) {
        for (i = 0; i < 256; i++) {
            this.matrix[i][col] = x;
        }
    },

    setRow: function(row, x) {
        for (i = 0; i < 256; i++) {
            this.matrix[row][i] = x;
        }
    },

    getCol: function(col) {
        var output = 0;
        for (i = 0; i < 256; i++) {
            output += this.matrix[i][col];
        }
        return output;
    },

    getRow: function(row) {
        var output = 0;
        for (i = 0; i < 256; i++) {
            output += this.matrix[row][i];
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
    },
    readTextFileForFib: function(filePath) {
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
                var line = parseInt(lines[n]);
                console.log(line);
                this.fib(line);
            }
        }
    },
    readTextFileForQueryBoard: function(filePath) {
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
                var objs = line.split(" ");
                var fnstring = objs[0];
                var fnparams = (objs.length>2 ? [objs[1],objs[2]] : objs[1]);
                var fn = this[fnstring];
                if (typeof fn === "function") {
                    return fn.apply(null, fnparams);
                } 
            }
        }
    }
};