def find_max(arr):
    if not arr:
        return None
    max = arr[0]
    i = 0
    while i < len(arr):
        if arr[i] > max:
            max = arr[i]
        i += 1
    return max

arr = [1, 2, 3, 4, 5]

max = find_max(arr)

print(max)