def a(a):
    b=a[0]
    c=a[1]
    return [b,c] # without (),[], or {} will be tupple
print(a([2,2]))

#instead
def a(*a):
    b=a[0]
    c=a[1]
    return [b,c]
print(a(1,3)) # not use []
