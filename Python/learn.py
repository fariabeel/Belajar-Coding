def to_alternating_case(string):
    a=[]
    for i in string:
        a.append(i)
        continue
    for i in a:
        if i.isupper()==True:
            b=a.index(i)
            a[b]=a[b].lower()
            print('1',a[b])
        else:
            c=a.index(i)
            a[c]=a[c].upper()
            print(a[c])
    a=''.join(a)
    return a

print(to_alternating_case("fjfjfjjFFFFFF"))
  
