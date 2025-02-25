def a(a,b):
    plus=a+b
    multiply=a*b
    half=a//b
    return plus, multiply, half
a,b,c=a(2,10)
print(f'{a} {b} {c}')

def a(a='wow'):
    print(a)
a()
a('nah')

def a(a=2,b=1):
    print(f'{a} {b}')
a()
a(1,3)

def a(a,b=10):
    print(f'{a} {b}')
# a() error
a(11)
a(1,2)
