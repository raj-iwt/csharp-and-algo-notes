class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

class Tree:
    def __init__(self):
        self.root = None
        
    def insert(self, val):
        if self.root == None:
            self.root = TreeNode(val)
        else:
            self.insert_recursive(self.root, val)

    def insert_recursive(self, current, val):
        if val < self.root.val:
            if current.left == None:
                current.left = TreeNode(val)
            else:
                self.insert_recursive(current.left, val)
        else:
            if current.right == None:
                current.right == TreeNode(val)
            else:
                self.insert_recursive(current.right, val)

    def inorder_traversal(self):
        self.inorder_traversal_recursive(self.root, [])

    def _inorder_recursive(self, current, result):
        if current:
            self._inorder_recursive(current.left, result)
            result.append(current.val)
            self._inorder_recursive(current.right, result)
        return result
