var nums = [1, 2, 3, 4, 5, 6, 7, 8]

var rotate = function(nums, k) {
    for (var i = 1; i <= k; i ++) {
        var lastInt = nums.pop();
        nums.unshift(lastInt);
    }
    return nums
};

console.log(rotate(nums, 3))