
/*
* @param {string} s
* @return {boolean}
*/

var isValid = function(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++){
        if (s[i] === ')' && stack.pop() !== '(') {
            return false;
        }

        if (s[i] === '}' && stack.pop() !== '{') {
            return false;
        }
        
        if (s[i] === ']' && stack.pop() !== '[') {
            return false;
        }

        if (s[i] === '(' || s[i] === '{' || s[i] === '['){
            stack.push(s[i]);
        }        
    }

    return stack.length === 0;
};

console.log(isValid("()"))