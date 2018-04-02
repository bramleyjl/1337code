var reverseString = function(s) {
  s = s.split('').reverse().join('');
  return s
};

var string = "hello guys"

console.log(reverseString(string))