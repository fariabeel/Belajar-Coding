import string
import random

def b(a,b,c,d,e):
    f=a,b,c,d,e
    print(random.choice(f))

b(1,2,'d','g','wow')

def c():
    print(random.choice(string.ascii_uppercase))
c()

def d(a):
    print(a)
d(1)
print('--------------------')
a=3,1,2,34
def e(a):
    for i in a:
        print(i)
e(a)
def f(a,b):
    return a**b
print(f(2,8))

