class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)
    
    def pop(self):
        if self.is_empty():
            return None
        else:
            self.items.pop()

    def is_empty(self):
        return len(self) == 0
    
    def peek(self):
        if not self.is_empty():
            return self.items[-1]
        else:
            return None