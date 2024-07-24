function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root, low = null, high = null) {
  if (!root) return true;
  if ((low != null && root.val <= low) || (high != null && root.val >= high))
    return false;
  return (
    isValidBST(root.right, root.val, high) &&
    isValidBST(root.left, low, root.val)
  );
};

const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
console.log(isValidBST(root)); // true
