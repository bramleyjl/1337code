var twoSum = function(nums, target) {
    var hashTable = {};

    for (var i = 0; i < nums.length; i++) {
      var needle = (target - nums[i]).toString();
      if (hashTable[needle] !== undefined) {
        console.log([hashTable[needle], i]);
        return ([hashTable[needle], i]);
      } else {
        hashTable[nums[i]] = i;
      }
    };
};

var arr = [2, 7, 11, 15];
var target = 9;
twoSum(arr, target);

var arrTwo = [-1, -2, -3, -4, -5];
var targetTwo = -8;
twoSum(arrTwo, targetTwo);