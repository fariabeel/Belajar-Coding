a=[2,2,4,5,54,3,2,342,5,8,'four']
print(a.count(2)) # counting index with value 2 in a
print(a.index('four')) #take the first index with value 'four'
b=a.index('four')
a.pop()
print(b)
print(a)
a.sort() #int and str in same list cannot sort()
print(a)
a=['jfjf','aabbbk','adfvff','fksj']
a.sort()
print(a)
a.reverse()
print(a)