var containsDuplicate = function(nums) {
  var existing = {};
  for (var i = 0; i < nums.length; i++) {
    if (existing[nums[i]] !== undefined) {
      return true;
    }
    existing[nums[i]] = 1;
  };
  return false;
};

arr = [1, 2, 3, 4, 5];
console.log(containsDuplicate(arr));

arr2 = [1,1,1,3,3,4,3,2,4,2];
console.log(containsDuplicate(arr2));