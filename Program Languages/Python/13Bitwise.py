#bitwise or = |
#bitwise and = &
#bitwise xor = ^
#bitwise not = ~
a = 6|4 #the value is same with format biner 6
print(format(6,'08b'))
print(format(4,'08b'))
print(format(a,'08b')) 
print(a) #search google if interest how to find the number
# 0 is false, 1 is true
# the bitwise operation is
# just execute the biner in front of the very back 1

a = 6&4
print('\n')
print(format(6,'08b'))
print(format(4,'08b'))
print(format(a,'08b')) 

print('\n')
a = 6^4
print(format(6,'08b'))
print(format(4,'08b'))
print(format(a,'08b')) 

print("\n")
print(~a) #like (a+1)*-1
print(format(~a,"08b")) #learn again!


a = 4
print("\n")
print(format(a,'08b'))
c = a << 2
print(format(c,"08b"))

print("\n")
print(format(a,'08b'))
c = a >> 2
print(format(c,"08b"))




