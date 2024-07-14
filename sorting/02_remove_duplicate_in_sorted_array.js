/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let len = nums.length - 1;
    for (let i = 0; i < len; i++){
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
            len--;
            i--;
        }

        console.log(nums, i, len);
    }
  
    return nums;
};

const nums1 = [0,0,1,1,1,2,2,3,3,4];

console.log(removeDuplicates(nums1)); // [1, 2]