/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  if (n === 0) {
    return;
  }
 
  let k = 0;
  while (k < n) {
    nums1[m + k] = nums2[k];
    k++;
  }

  let i = 0; 

  while (i < nums1.length) { 
    let j = i + 1;
    while (j < nums1.length) {
      if (nums1[i] > nums1[j]) {
        let temp = nums1[i];
        nums1[i] = nums1[j];
        nums1[j] = temp;
      }
      j++;
    }

    i++;
  }

  return;
};

const nums1 = [4,5,6,0,0,0];
const m = 3;
const nums2 = [1, 2, 3];
const n = 3;

console.log(merge(nums1, m, nums2, n));
