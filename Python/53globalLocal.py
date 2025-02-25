a='123543483' # global variable

for i in range(0,3):
    print(f'loop {i} {a}') # using global a

def a(a):
    b='wow' # local variable
    return a,b
#print(b) cannot
print(a('roar'))

b='123543483'
def a():
    print(b) # using global b
a()
b='wow'
a()

a='123543483'
def a():
    print(a)
a() # cannot becuss a rewrite being function

c='raor'
d='wow'
def a(a,b):
    global c # now can modify global c
    global d
    c= a
    d= b
    return c,d
print(a(1,2))

a=0
for i in range(0,5):
    a+=i
    b=0 # local variable like b will be global in forloop
print(a) # a+5!
print(b) 

if True: #variable in if operation will be global too
    a=5
    b=10
print(a,b)

