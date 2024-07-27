def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[-1]
    less_than_pivot = [x for x in arr[:-1] if x < pivot]
    greater_than_pivot = [x for x in arr[:-1] if x >= pivot]
    print(pivot, less_than_pivot, greater_than_pivot)
    return quicksort(less_than_pivot) + [pivot] + quicksort(greater_than_pivot)


arr = [3, 6, 8, 10, 1, 2, 1]
print(quicksort(arr))  # Output should be: [1, 1, 2, 3, 6, 8, 10]