def a(a,b,c):
    print(f'{a} {b} {c}')
a(1,2,3)

def a(**a):
    print(f'{a['a']} {a['b']} {a['c']}')
a(a=4,b='woho', c='nah')