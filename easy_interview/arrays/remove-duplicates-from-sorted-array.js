var nums = [1, 1, 2, 3, 4, 5, 5, 6]

var removeDuplicates = function(nums) {
    for (var i = 0; i <= nums.length -1; i++) {
        while (nums[i] === nums[i + 1]) {
            nums.splice(i + 1, 1);
        }
    }
    return nums;
};

console.log(removeDuplicates(nums))
