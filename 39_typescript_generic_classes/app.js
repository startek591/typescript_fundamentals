var Stack = /** @class */ (function () {
    function Stack(size) {
        this.size = size;
        this.elements = [];
    }
    Stack.prototype.isEmpty = function () {
        return this.elements.length === 0;
    };
    Stack.prototype.isFull = function () {
        return this.elements.length === this.size;
    };
    Stack.prototype.push = function (element) {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);
    };
    Stack.prototype.pop = function () {
        if (this.elements.length == 0) {
            throw new Error('The stack is empty!');
        }
        return this.elements.pop();
    };
    return Stack;
}());
function randBetween(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
var numbers = new Stack(3);
while (!numbers.isFull()) {
    {
        var n = randBetween(1, 100);
        console.log("Pushing ".concat(n, " to numbers"));
        numbers.push(n);
    }
}
var words = 'The quick brown fox jumps over the lazy dog'.split(' ');
var wordStack = new Stack(words.length);
// push words into the stack
words.forEach(function (word) { return wordStack.push(word); });
// pop words from the stack
while (!wordStack.isEmpty()) {
    console.log(wordStack.pop());
}
