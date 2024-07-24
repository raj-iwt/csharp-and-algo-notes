class TreeNode {
  constructor(key) {
    this.val = key;
    this.left = null;
    this.right = null;
  }
}

function buildTreeFromArray(arr) {
  if (!arr.length) {
    return null;
  }

  let root = new TreeNode(arr[0]);
  let queue = [root];
  let i = 1;

  while (i < arr.length) {
    let current = queue.shift();

    if (i < arr.length) {
      current.left = new TreeNode(arr[i]);
      queue.push(current.left);
      i++;
    }

    if (i < arr.length) {
      current.right = new TreeNode(arr[i]);
      queue.push(current.right);
      i++;
    }
  }

  return root;
}

const inputArray = [1, 2, 3, 4, 5];
const root = buildTreeFromArray(inputArray);

// Depth first inorder traversal -

function dft_inorder(node) {
  if (node) {
    dft_inorder(node.left);
    console.log(node.val);
    dft_inorder(node.right);
  }
}

dft_inorder(root);

// Depth first pre-order traversal

function dft_preorder(node) {
  if (node) {
    console.log(node.val);
    dft_preorder(node.left);
    dft_preorder(node.right);
  }
}

dft_preorder(root);

// Depth first post-order traversal

function dft_postorder(node) {
  if (node) {
    dft_postorder(node.left);
    dft_postorder(node.right);
    console.log(node.val);
  }
}

dft_postorder(root);

// Height of Tree

function treeHeight(node) {
  if (node == null) return 0;
  const leftHeight = treeHeight(node.left);
  const rightHeight = treeHeight(node.right);
  return Math.max(leftHeight, rightHeight) + 1;
}

// Balanced Tree

function isBalanced(node) {
  function checkHeight(node) {
    if (node == null) return 0;
    const leftHeight = checkHeight(node.left);
    const rightHeight = checkHeight(node.right);

    if (
      leftHeight == -1 ||
      rightHeight == -1 ||
      Math.abs(leftHeight - rightHeight) > 1
    ) {
      return -1;
    }

    return Math.max(leftHeight, rightHeight) + 1;
  }

  return checkHeight(node) !== -1;
}

// Binary Search Tree (BST)

function isBst(node, low = null, high = null) {
  if (node) {
    if (low !== null && node.val <= low) {
      return false;
    }

    if (high !== null && node.val >= high) {
      return false;
    }

    return isBst(node.left, node.val, high) && isBst(node.right, low, node.val);
  }
  return true;
}
