def sortJumbled(mapping, nums):

    def get_mapping_order(num):
        order = [int(d) for d in str(num)]
        mapping_order = [mapping[d] for d in order]
        return int(''.join([str(d) for d in mapping_order]))
    
    nums.sort(key=lambda x: get_mapping_order(x))
    return nums

print(sortJumbled([0,1,2, 3], [12, 13, 31, 23, 32, 21])) # [12, 21, 13, 23, 31, 32]