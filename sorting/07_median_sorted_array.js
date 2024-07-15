/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let median = 0;
  const mergedList = nums1.concat(nums2).sort((a, b) => a - b);
  const c = Math.floor(mergedList.length / 2);
  console.log(c);
  median += mergedList[c];
  if (mergedList.length % 2 === 0) {
    median += mergedList[c - 1];
    median = median / 2;
  }

  return median;
};

let nums1 = [1, 2];
let nums2 = [3, 4];

console.log(findMedianSortedArrays(nums1, nums2));
