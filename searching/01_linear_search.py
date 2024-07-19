
def linear_search(arr, target):
    for index, element in enumerate(arr):
        if element == target:
            return index
    return -1


array = [10, 20, 30, 40, 50]
target_value = 30

# Call the function and store the result
result = linear_search(array, target_value)

# Print the result
if result != -1:
    print(f'Target value {target_value} found at index {result}.')
else:
    print(f'Target value {target_value} not found in the array.')