var reverseString = function(s) {
  var j = s.length - 1;
  for (var i = 0; i < (s.length / 2); i++) {
    [s[i], s[j-i]] = [s[j-i], s[i]];
  }
  return s;
};

var string = ["h","e","l","l","o"]

console.log(reverseString(string))