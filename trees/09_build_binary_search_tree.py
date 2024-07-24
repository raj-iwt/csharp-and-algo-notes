class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

def buildBstFromArray(arr):
    if not arr:
        return None
    
    root = None
    for num in arr:
        root = recursiveBuild(root, num)
    
    return root
        

def recursiveBuild(current, val):
    if current == None:
        current = TreeNode(val)
    else:
        if val < current.val:
            recursiveBuild(current.left, val)
        else:
            recursiveBuild(current.right, val)
    return current

def inorderTraversal(root):
    return inorderTraversalRecursive(root, [])

def inorderTraversalRecursive(root, result):
    if root:
        print(root.left)
        inorderTraversalRecursive(root.left, result)
        result.append(root.val)
        inorderTraversalRecursive(root.right, result)

    return result


root = TreeNode(5)
root.left = TreeNode(3)
root.right = TreeNode(7)
root.left.left = TreeNode(2)
root.left.right = TreeNode(4)
root.right.left = TreeNode(6)
root.right.right = TreeNode(8)

print(inorderTraversal(root))