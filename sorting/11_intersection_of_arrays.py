def intersection(nums1, nums2):
    set1 = set(nums1)
    set2 = set(nums2)
    return list(set1.intersection(set2))


nums1 = [2, 4, 5]
nums2 = [2, 4, 7, 8]

print(intersection(nums1, nums2))
