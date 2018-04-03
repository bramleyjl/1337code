var isAnagram = function(s, t) {

	if (s.length !== t.length) return false;

  let newS = s.split('').sort().join('');
  let newT = t.split('').sort().join('');
  
  if (newS === newT) return true;
  return false;
};

const s = "anagram"
const t = "nagaram"

console.log(isAnagram(s, t))