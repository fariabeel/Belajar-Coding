a={
    'a':'1',
    'b':'2',
    1:'3'
}
print(a['a'])
print(a['b'])
print(a[1])
print('--------')
print(len(a))
print('a' in a)
print('1' in a)
print(a.get('a'))
print(a.get('1', TypeError))
a['a']='ak'
a['z']='real'
print(a)
a.update({'d':'wowo'})
print(a)
del a #delete a