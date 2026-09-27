a={
    'a':'1',
    'b':'2',
    'c':'3'
}
b={
    'a':'4',
    'b':'5',
    'c':'6'
}
c=a.copy()
print(c)
c.pop('a') #dict must argument with key
print(c)
c.popitem() #last remove
print(c)
c='wow'
a['d']=c
print(a)
c={
    'a':'7',
    'b':'8',
    'c':'9'
}
a.popitem()# last remove
d={
    'a':a,
    'b':b, 
    'c':c
}
for i in d:
    a=d[i]['a']
    b=d[i]['b']
    c=d[i]['c']
    print(f'{a} {b} {c}')