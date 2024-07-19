def reverse(arr):
    i = 0
    while i < len(arr) // 2:
        temp = arr[i]
        arr[i] = arr[len(arr) - i - 1]
        arr[len(arr) - i - 1] = temp 
        i += 1

arr = [1, 2, 3, 4, 5]

reverse(arr)

print(arr)