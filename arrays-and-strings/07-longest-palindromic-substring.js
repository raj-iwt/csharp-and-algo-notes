var verify = function(s = '') {
    s = s == null ? '' : s;
    let left = 0;
    let right = s.length - 1;
    let isLeft = true;
    while (left <= right){
        const substr = s.substring(left, right + 1);
        if (palindrome(substr)) {
            return substr;
        }

        if (isLeft) {
            left++;
        } else {
            right--;
        }

        isLeft = !isLeft;
    }    

    return '';
};

var palindrome = function(str) {
    let left = 0;
    let right = str.length - 1;

    while(left < right) {
        if (str[left] !== str[right]){
            return false;
        }

        left++;
        right--;
    }

    return true;
};

console.log(verify("cbbd"))