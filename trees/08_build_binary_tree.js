/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  let preorderIndex = 0;
  let inorderIndexMap = new Map();
  for (let i = 0; i < inorder.length; i++) {
    inorderIndexMap.set(inorder[i], i);
  }
  function arrayToTree(left, right) {
    // if there are no elements to construct the tree
    if (left > right) return null;
    // select the preorder_index element as the root and increment it
    let rootValue = preorder[preorderIndex++];
    let root = new TreeNode(rootValue);
    // build left and right subtree
    // excluding inorderIndexMap[rootValue] element because it's the root
    root.left = arrayToTree(left, inorderIndexMap.get(rootValue) - 1);
    root.right = arrayToTree(inorderIndexMap.get(rootValue) + 1, right);
    return root;
  }
  return arrayToTree(0, preorder.length - 1);
};

let preorder = [3, 9, 20, 15, 7];
let inorder = [9, 3, 15, 20, 7];

console.log(buildTree(preorder, inorder)); // [3,9,20,null,null,15,7]
