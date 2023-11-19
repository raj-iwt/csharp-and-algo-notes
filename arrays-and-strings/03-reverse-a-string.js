/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;
    while(left < right){
        const temp = s[right]
        s[right] = s[left]
        s[left] = temp
        left++
        right--
    }
    return s;
};

console.log(reverseString(["H","a","n","n","a","h"]))