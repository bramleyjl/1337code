var firstUniqChar = function(s) {
  s = s.split('');
  var checked = {};
  let unique = {};
  for (var i = 0; i < s.length; i++) {
      if (!(s[i] in checked)) {
          checked[s[i]] = 1;
          unique[s[i]] = i;
      } else {
        delete unique[s[i]];
      }
  }
  var answer = Object.values(unique)[0];
  return (answer !== undefined) ? answer : -1;
};

const newString = "leetcode";
console.log(firstUniqChar(newString));
