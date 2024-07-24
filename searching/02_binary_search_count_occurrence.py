def count_occurence(arr, target):
    left, right = 0, len(arr) - 1
    first = -1
    last = -1
    while (left <= right):
        if (arr[left] == target):
            first = left
        if (arr[right] == target):
            last = right
        if first != -1 and last != -1:
            return right - left + 1
        left += 1
        right -= 1

    return 0


arr = [2, 2, 3, 3, 3, 4, 5, 6, 8]

print(count_occurence(arr, 3))