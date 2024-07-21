class Node:
    def __init__(self, val):
        self.val = val
        self.next = None
    
class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, val):
        node = Node(val)
        if not self.head:
            self.head = node
            return
        
        last_node = self.head
        while last_node.next:
            last_node =  last_node.next
        
        last_node.next = node

    def delete(self, key):
        current = self.head
        if current and current.val == key:
            self.head = current.next
            current = None
            return
        
        while current.next:
            if current.next.val == key:
                current.next = current.next.next
                return
            current = current.next

        return

    def print(self):
        current = self.head
        while current:
            print(current.val, end=' -> ')
            current = current.next
            
        print(None)

