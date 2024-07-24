def merge_sort(nums1, nums2):
    i = 0
    j = 0
    m = len(nums1)
    n = len(nums2)
    result = []
    while i < m and j < n:
        if nums1[i] > nums2[j]:
            result.append(nums2[j])
            j += 1
        else:
            result.append(nums1[i])
            i += 1

    while i < m:
        result.append(nums1[i])
        i += 1
    
    while i < n:
        result.append(nums2[j])
        j += 1
    
    return result

nums1 = [1, 2, 3, 4, 5]
nums2 = [1, 2, 3, 5]

print(merge_sort(nums1, nums2))