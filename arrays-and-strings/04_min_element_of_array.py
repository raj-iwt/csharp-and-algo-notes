def find_min(arr):
    if not arr:
        return None
    min = arr[0]
    for num in arr[1:]:
        if num < min:
            min = num
    return min

arr = [ 1, 2, 3, 4, 5]

print("Min: ", find_min(arr))
