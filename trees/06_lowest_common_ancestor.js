/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root) return root;

  if (root.left === null || root.right === null) {
    return root;
  }

  if (
    (root.val === p.val && root.left?.val === q.val) ||
    (root.val === q.val && root.left?.val === p.val)
  ) {
    return root;
  }

  if (
    (root.val === p.val && root.right?.val === q.val) ||
    (root.val === q.val && root.right?.val === p.val)
  ) {
    return root;
  }

  if (
    (root.left?.val === p.val && root.right?.val === q.val) ||
    (root.left?.val === q.val && root.right?.val === p.val)
  ) {
    return root;
  }

  return (
    lowestCommonAncestor(root.left, p, q) ||
    lowestCommonAncestor(root.right, p, q)
  );
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const root = new TreeNode(2);

root.left = new TreeNode(1);
root.right = new TreeNode(3);

console.log(lowestCommonAncestor(root, new TreeNode(3), new TreeNode(1))); // 3
