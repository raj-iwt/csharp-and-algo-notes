/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (nums.length == 1) return nums[0];
  let i = 1;
  while (i < nums.length) {
    if (nums[i] < nums[i - 1]) {
      return nums[i];
    }

    i++;
  }

  return nums[0];
};

const nums = [3, 4, 5, 1, 2];
console.log(findMin(nums));

const test2 = [4, 5, 6, 7, 0, 1, 2];
console.log(findMin(test2));
