class Solution:
    def threeSum(self, nums):
        if len(nums) < 3:
            return []
        i = 0
        result = []
        while i < len(nums) - 2:
            j = i + 1
            while j < len(nums) - 1:
                k = j + 1
                while k < len(nums):
                    if nums[i] + nums[j] + nums[k] == 0:
                        threeSum = [nums[i], nums[j], nums[k]]
                        if threeSum not in result:
                            result.append(threeSum)
                    k += 1
                j += 1
            i += 1
        
        return result
        
        