"use strict";
exports.__esModule = true;
exports.Solution = void 0;
var readline_1 = require("readline");
var Solution = /** @class */ (function () {
    function Solution() {
    }
    Solution.prototype.solve = function (s) {
        var stringLength = s.length;
        var bracketCount = 0;
        var midPos = Math.floor(stringLength / 2);
        var indexMidPlusOne = midPos;
        if (!s.length)
            return true;
        for (var index = 0; index < stringLength; index++) {
            var letter = s[index];
            if (letter !== '(' && letter !== ')')
                return false;
            if (letter === '(') {
                bracketCount++;
            }
            if (letter === ')') {
                bracketCount--;
            }
            if (bracketCount < 0)
                return false;
            if (index == indexMidPlusOne && bracketCount >= midPos) {
                return false;
            }
        }
        if (bracketCount == 0)
            return true;
        else
            return false;
    };
    return Solution;
}());
exports.Solution = Solution;
var input = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout
});
input.question("Please input the string: ", function (answer) {
    var solution = new Solution();
    console.log('result:', solution.solve(answer));
    input.close();
});
