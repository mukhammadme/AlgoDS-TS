a = 1
b = 4
c = 3

if (a > b > c or a < b < c):
    a *= 2
    b *= 2
    c *= 2
else:
    a *= -1
    b *= -1
    c *= -1

print(a, '\n', b, '\n', c)
