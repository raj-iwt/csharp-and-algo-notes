def reverse(x: int) -> int:
        y = str(x)
        if x < 0:
            return int('-' + y[:0:-1])
        else:
            return int(y[::-1])

print(reverse(123))  # 321
print(reverse(-123))  # -321