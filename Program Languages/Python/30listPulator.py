a=[2,4,3,3,55,4]
print(a[-2])
print(len(a))
a.insert(3,"a") #cannot print(a.insert(3,'a')) 
#a.insert(3,"a") will adding index by 1 and index index 3 in previous will be index 4, and index 4 will be index 5 and so on
print(a)
a.append('b')
#this too will adding index by 1 in the veryback index
print(a)
a.extend('j') # same with index but iterable only and andding
# iterable
print(a)
b=3,3,3,3
a.extend(b)
print(a)
b=[1,1]
a.extend(b)
print(a)
a[0]=3
print(a)
a.remove(3) #remove first index that have 3 value
print(a)
a.pop(

)
print(a)