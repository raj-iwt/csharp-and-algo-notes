def find_occurence(arr, target):
    left, right = 0, len(arr) - 1
    position = float('inf')
    while (left <= right):
        mid = left + right // 2
        if arr[mid] == target:
            position = min(mid, position)
            right = min(mid + 1, right - 1)
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid + 1

    return position if position != float('inf') else -1


arr = [2, 2, 3, 3, 3, 4, 5, 6, 8]

print(find_occurence(arr, 3))