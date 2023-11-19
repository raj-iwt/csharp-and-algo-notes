/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function(s) {
    let length = s.length - 1;
    let arr = [];
    let position = s.length;
    for (let i = length; i >= 0; i--) {
        if (s[i] === ' ') {
            const word = s.slice(i + 1, position);
            arr = arr.concat(word).concat(' ');
            position = i;
        }

        if (i === 0) {
            const word = s.slice(i, position);
            arr = arr.concat(word);
        }
    }
    
    for (let i = 0; i < arr.length; i++) {
        s[i] = arr[i];
    }
};

console.log(reverseWords(["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]))