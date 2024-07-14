
First of all, here is the definition of the TreeNode which we would use.

```
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

```

## Building a Tree

```
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
```

## Tree Traversal

Process of visiting all the nodes in a tree data structure in a specific order. 

### Depth-First Traversal (DFT)

#### Preorder (Root, Left, Right)

```
function dft_preorder(node) {
  if (node) {
    console.log(node.val);
    dft_preorder(node.left);
    dft_preorder(node.right);
  }
}
```
#### Inorder (Left, Root, Right)

```
function dft_inorder(node) {
  if (node) {
    dft_inorder(node.left);
    console.log(node.val);
    dft_inorder(node.right);
  }
}
```

#### Postorder (Left, Right, Root)

```
function dft_postorder(node) {
  if (node) {
    dft_postorder(node.left);
    dft_postorder(node.right);
    console.log(node.val);
  }
}
```
### Breadth-First Traversal (BFT)

#### Level order



## Tree Height

Length of longest path from the root to leaf.

```
function treeHeight(node) {
  if (node == null) return 0;
  const leftHeight = treeHeight(node.left);
  const rightHeight = treeHeight(node.right);
  return Math.max(leftHeight, rightHeight) + 1;
}
```