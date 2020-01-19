var threeSum = function(nums) {
    nums = nums.sort(function(a, b) { return a - b });
    var k = nums.length - 1;
    if (nums[k] < 0) {
      return [];
    } else if (nums[k] == 0 && nums[k -1] == 0 && nums[k -2] == 0) {
      return [[0, 0, 0]];
    }
    var zeroSets = {};
    for (var i = 0; i < nums.length; i++) {
      var j = i + 1;
      var k = nums.length - 1;
      while (j < k) {
        var sum = nums[i] + nums[j] + nums[k];
        if (sum == 0) {
          var key = [nums[i], nums[j], nums[k]];
          zeroSets[key] = key;
          j += 1;
        } else if (sum < 0) {
          j += 1;
        } else {
          k -= 1;
        }
      }
    }
    return Object.values(zeroSets);
};

var arr = [0, 0, 0];
console.log(threeSum(arr));