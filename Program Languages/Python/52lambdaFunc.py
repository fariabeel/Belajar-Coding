a= lambda a,b:print(a**b) # a to the power of b
a(2,3)

a = lambda a: print(a*2)
a(10)

# Study case

def a(a):
    return len(a)

data=['aaa','bb','c']
data.sort(key=a)
print(data) # too long

data=['aaa','bb','c']
data.sort(key=lambda a:len(a))
print(data)

b=[1,2,3,64,4,7,4,34,56,7,54,3,456,7,6543,4,4,5]
data= list(filter(lambda a:(a%2==0),b)) 
print(data) # even number


def a(a):
    return lambda b:b**a
b=a(2) # a take 2 being argument for a()
print(b(2)) # a take b argument being argument for lambda in a()

