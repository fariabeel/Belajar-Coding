with open('a.txt','w',encoding='utf-8') as file:
    file.write('wow')

with open('a.txt','w',encoding='utf-8') as file:
    file.write('roar') #overwrite previous



with open('a.txt','a',encoding='utf-8') as file:
    file.write('wow') # append it 

with open('a.txt','r+',encoding='utf-8') as file:
    file.write('wow')
    file.write('rir') # where's the w?

with open('a.txt','r+',encoding='utf-8') as file:
    a=file.read()
    print(a)

with open('a.txt','r+',encoding='utf-8') as file:
    file.write('skrah') # overwrite text depend
                        # on a character length