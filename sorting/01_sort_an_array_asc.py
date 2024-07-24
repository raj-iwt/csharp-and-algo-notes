def sort_asc(arr):
    if len(arr) <= 1:
        return arr
    i = 0
    while i < len(arr):
        j = i + 1
        while j < len(arr):
            if arr[i] > arr[j]:
                temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp
            j += 1
        i += 1

    return arr

arr = [1, 2, 3, 4, 5, 3, 4]
print(sort_asc(arr))


