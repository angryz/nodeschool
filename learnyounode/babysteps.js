var sum = 0;
var len = process.argv.length;
for (var i = 2; i < len; i++) {
  sum += +process.argv[i];
}
console.log(sum);
