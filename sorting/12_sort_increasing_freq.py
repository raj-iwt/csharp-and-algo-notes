def frequencySort(nums):
        freq_dict = {}
        for num in nums:
            if num in freq_dict:
                freq_dict[num] += 1
            else:
                freq_dict[num] = 1

        return sorted(nums, key=lambda x: (freq_dict[x], -x))


array = [1, 1, 2, 2, 2, 3]
print(frequencySort(array))  # [3, 1, 1, 2, 2, 2]
        