var result;
result = 1;
console.log(result);
result = 'Hello';
console.log(result);
result = [1, 2, 3];
var total = result.reduce(function (a, b) { return a + b; }, 0);
console.log(total);