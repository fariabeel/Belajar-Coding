print("\n")
a=1 # 1 is data integer
b=2.2 #data float
c="real" #data string
d=True #data boolean
e=1j #data complex

from ctypes import c_double, c_char
f = c_double(10.5)
print(f"""{type(a)}
           {type(b)}
           {type(c)}
           {type(d)}
           {type(e)}
           {type(f)}""")
print("\n")
