var search = function(nums, target) {
    var start = 0;
    var end = nums.length - 1;
    if (nums[end] === target) return end;
    while (start < end) {
      let middle = Math.floor((start + end) / 2);
      if (nums[middle] === target) return middle;
      if (nums[end] < nums[middle]) {
        if (target >= nums[start] && target <= nums[middle]) {
          end = middle;
        } else {
          start = middle + 1;
        }
      } else {
        if (target >= nums[middle] && target <= nums[end]) {
          start = middle + 1;
        } else {
          end = middle;          
        }
      }
    }
    return -1;
};

let arr = [4,5,6,7,0,1,2];
let target = 0;
console.log(search(arr, target));

let arr2 = [4,5,6,7,0,1,2];
let target2 = 6;
console.log(search(arr2, target2));

let arr3 = [4,5,6,7,8,1,2,3];
let target3 = 8;
console.log(search(arr3, target3));