a={
    'a':'1',
    'b':'2',
    'c':'3'
}
print(a.values())
print(a.keys())
print(a.items())
for a,b in a.items():
    print(f'{a} = {b}')