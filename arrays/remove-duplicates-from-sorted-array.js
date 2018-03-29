var nums = [1, 1, 2, 3, 4, 5, 5, 6]

var removeDuplicates = function(nums) {
    for (var i = 0 ; i <= nums.length -1; i++) {
        for (var j = nums.length +1; j > i; j--) {
            if (nums[i] === nums[j]) {
                nums.splice(j, 1);
            }
        }
    }
    return nums    
};

console.log(removeDuplicates(nums))