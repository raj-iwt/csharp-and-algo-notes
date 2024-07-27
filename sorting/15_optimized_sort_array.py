def sortArray(nums):
        left = 0
        while left < len(nums) - 1:
            right = left + 1
            while right < len(nums):
                if nums[left] > nums[right]:
                    temp = nums[right]
                    nums[right] = nums[left]
                    nums[left] = temp
                right += 1
            left += 1
        return nums