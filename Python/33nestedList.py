a=[3,3,3]
b=[4,2,5]
c=[a,b,1]
print(c)
print(c[0][1])
a=c.copy()
print(f'{hex(id(c))} {hex(id(a))}') #different
print(f'{hex(id(c[0]))} {hex(id(a[0]))}') #same
print(f'{hex(id(c[0][0]))} {hex(id(a[0][0]))}') #same
a[0]=[7,5,6] 
print(c,a)
print(f'{hex(id(c))} {hex(id(a))}') #different
print(f'{hex(id(c[0]))} {hex(id(a[0]))}') #different
print(f'{hex(id(c[0][0]))} {hex(id(a[0][0]))}') #different
from copy import deepcopy
a=deepcopy(c)
print(a)
print(f'{hex(id(c))} {hex(id(a))}') #different
print(f'{hex(id(c[0]))} {hex(id(a[0]))}') #different
print(f'{hex(id(c[0][0]))} {hex(id(a[0][0]))}') #same
