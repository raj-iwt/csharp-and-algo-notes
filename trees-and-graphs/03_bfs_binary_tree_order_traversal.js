/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let levels = [];
    function helper(node, level) {
        if (node === null) return;
        if (levels.length === level) levels.push([]);
        levels[level].push(node.val);
        if(node.left !== null) helper(node.left, level + 1);
        if(node.right !== null) helper(node.right, level + 1);
    }

    if(root !== null) helper(root, 0);
    return levels;
};


function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
console.log(levelOrder(root)); // [[3],[9,20],[15,7]]