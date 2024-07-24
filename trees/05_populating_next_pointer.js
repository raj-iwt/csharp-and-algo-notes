class _Node {
  constructor(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
  if (!root) return root;

  if (root.left) {
    root.left.next = root.right ?? findNext(root.next);
  }

  if (root.right) {
    root.right.next = findNext(root.next);
  }

  connect(root.right);
  connect(root.left);

  return root;
};

function findNext(root) {
  if (!root) return root;
  if (root.left) return root.left;
  if (root.right) return root.right;
  if (root.next) return findNext(root.next);
  return null;
}

const root = new _Node(
  1,
  new _Node(2, new _Node(4), new _Node(5)),
  new _Node(3, null, new _Node(7))
);

console.log(connect(root)); // [1,#,2,3,#,4,5,7,#]
