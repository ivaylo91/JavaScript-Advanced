(function stringExtension() {
    String.prototype.ensureStart = function (str) {
        if (!line.startsWith(str)) {
            return str + ' ' + line;
        } else {
            return line;
        }
    };
    String.prototype.ensureEnd = function (str) {
        if (!line.endsWith(str)) {
            return line + ' ' + str;
        } else {
            return line;
        }
    };
    String.prototype.isEmpty = function () {
        if (line.length === 0) {
            return true;
        } else {
            return false;
        }

    };
    String.prototype.truncate = function (n) {
        if (line.length < n) {
            return line;
        } else if (n < 4) {
            return ".".repeat(n);
        } else {
            let newStr = this.slice(0, n - 3);
            let lastWS = newStr.lastIndexOf(" ");
            if (lastWS !== -1) {
                return newStr.slice(0, lastWS) + "...";
            }
            else
                return newStr + "...";
        }
    };
    String.format = function (str,...arg) {
        let regex = new RegExp('{\\d+}', "g");
        str.replace(regex, function () {

        });
        return str;
    }
})();

let line = 'my string';

console.log(line = line.ensureStart('my'));
console.log(line = line.ensureStart('hello'));
console.log(line = line.truncate(16));
console.log(line = line.truncate(14));
console.log(line = line.truncate(8));
console.log(line = line.truncate(4));
console.log(line = line.truncate(2));
console.log(line = String.format('The {0} {1} fox',
    'quick', 'brown'));