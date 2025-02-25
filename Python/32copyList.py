#duplicate technique
a=['a','b','c']
b=a #pass by reference
print(b)
a[0]=1
print(a)
a=['a','b','c']
b=a
print(f'{hex(id(a))} {hex(id(b))}')
b=a.copy()
print(f'{hex(id(a))} {hex(id(b))}')
print(a,b)
b[0]='yo'
a[0]='ab'
print(a,b)

