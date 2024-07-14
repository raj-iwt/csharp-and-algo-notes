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
var zigzagLevelOrder = function (root) {
  let levels = [];
  function helper(node, level) {
    if (node === null) return;
    if (levels.length === level) levels.push([]);
    if (level % 2 == 0) {
      levels[level].push(node.val);
    } else {
      levels[level].unshift(node.val);
    }
    if (node.left !== null) helper(node.left, level + 1);
    if (node.right !== null) helper(node.right, level + 1);
  }

  helper(root, 0);

  return levels;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new TreeNode(
  1,
  null,
  new TreeNode(2)
);

console.log(zigzagLevelOrder(root)); // [[3],[20,9],[15,7]]
