class HashTable:
    def __init__(self, size=10):
        self.size = size
        self.table = [[] for _ in range(size)]

    def hash(self, key):
        return sum([ord(char) for char in key]) % self.size
    
    def insert(self, key, value):
        index = self.hash(key)
        for pair in self.table[index]:
            if pair[0] == key:
                pair[1] = value
                return
        self.table[index].append([key, value])
        print(self.table)

    def delete(self, key):
        index = self._hash(key)
        for i, pair in enumerate(self.table[index]):
            if pair[0] == key:
                self.table[index].pop(i)
                return

    def search(self, key):
        index = self._hash(key)
        for pair in self.table[index]:
            if pair[0] == key:
                return pair[1]
        return None
    


hash = HashTable()
print(hash.hash("hello"))
print(hash.hash("world"))
print(hash.hash("python"))
print(hash.hash("java"))
print(hash.hash("ruby"))
print(hash.hash("javascript"))

hash.insert("hello", 1)
hash.insert("world", 2)