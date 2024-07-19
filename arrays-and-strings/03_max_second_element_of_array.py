def find_max_second_element(arr):
    if len(arr) < 2:
        return None
    max = float('-inf')
    secondmax = float('-inf')
    i = 0
    while i < len(arr):
        if arr[i] > max:
            secondmax = max
            max = arr[i]
        i += 1
    return secondmax if secondmax != float('-inf') else None

arr = [1, 2, 3, 4, 5]

print(find_max_second_element(arr))