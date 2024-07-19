def remove_all_occurence(arr, target):
    newArray = []
    for i, num in enumerate(arr):
        if num != target:
            newArray.append(num)
    
    return newArray

arr = [ 2, 3, 4, 4, 5, 6]

print(remove_all_occurence(arr, 4))