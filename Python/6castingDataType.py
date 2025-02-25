a = 1
b = 0
c="1"
d="a"
e=""
print(f"""{int(a)}, {float(a)}, {str(a)}, {bool(a)}, {complex(a)}""")
print(type(str(a)))
print(f"""{int(b)}, {float(b)}, {str(b)}, {bool(b)}, {complex(b)}""")
print(f"""{int(c)}, {float(c)}, {str(c)}, {bool(c)}, {complex(c)}""")
print(f"""{str(d)}, {bool(d)}""")#cannot casting to int,float,complex
print(f"""{str(e)}, {bool(e)}""")#same with d