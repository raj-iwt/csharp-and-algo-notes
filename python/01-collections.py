my_set = set()
my_set.add(1)
my_set.add(3)
my_set.add(2)
my_set.add(3)
print(my_set)


set1 = {1, 2, 3}
set2 = {3, 4, 5}

union_set = set1 | set2
print(union_set)  # Output: {1, 2, 3, 4, 5}

intersection_set = set1 & set2
print(intersection_set)  # Output: {3}

difference_set = set1 - set2
print(difference_set)  # Output: {1, 2}

symmetric_difference_set = set1 ^ set2
print(symmetric_difference_set)  # Output: {1, 2, 4, 5}


from collections import deque

my_deque = deque()
my_deque = deque([1, 2, 3])

my_deque.append(4)
my_deque.appendleft(0)

print(my_deque)  # Output: deque([0, 1, 2, 3, 4])

my_deque.pop()

print(my_deque)  # Output: deque([0, 1, 2, 3])

my_deque.popleft()

print(my_deque)  # Output: deque([1, 2, 3])

my_deque.extend([4, 5, 6])

print(my_deque)  # Output: deque([1, 2, 3, 4, 5, 6])

my_deque.extendleft([0, -1, -2])

print(my_deque)  # Output: deque([-2, -1, 0, 1, 2, 3, 4, 5, 6])
