def first_occurence(arr, target):
    for i, num in enumerate(arr):
        if (num == target):
            return i
    
    return -1

arr = [ 2, 3, 5, 6]
print(first_occurence(arr, 5))
