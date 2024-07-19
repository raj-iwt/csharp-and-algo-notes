def sort_asc(arr):
    if not arr:
        return None
    if len(arr) == 1:
        return True
    i = 1
    while i < len(arr):
        if arr[i] < arr[i - 1]:
            return False
        i += 1

    return True

arr = [1, 2, 3, 4, 5, 3, 4]
print('Array is sorted? - ', sort_asc(arr))
