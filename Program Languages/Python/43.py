import random
import string
import os
os.system('cls')
mylist = ["apple", "banana", "cherry"]
a={
    'a':3,
    'b':2,
    'c':1
}
b=dict.fromkeys(a.keys(),'fromkeys') # keys,values
print(b) # output keys, fromkeys
c=2,4,5,9
print(random.choice(c))
# c=2 cannot
c=[2] #can
print(random.choice(c))
print(random.choice(string.ascii_uppercase))