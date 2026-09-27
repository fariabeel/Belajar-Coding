a=open('file_text.txt',mode='r')
print(a.read())
print(a.readable())
print(a.writable())
print(a.closed)
a.close()
print(a.closed)

print(8*'-','The different','-'*8)
a=open('file_text.txt',mode='r')
print(open('file_text.txt',mode='r').read())
print(open('file_text.txt',mode='r').readable())
print(open('file_text.txt',mode='r').writable())
print(open('file_text.txt',mode='r').closed)
open('file_text.txt',mode='r').close()
print(open('file_text.txt',mode='r').closed)

print('---------------2-----------------')
print(a.readline(),end='') #line 1
print(a.readline(),end='') #line 2
print(a.readlines()) # line 3 and and so on as list

print('---------------3----------------')
with open('file_text.txt',mode='r') as file:
    content = file.readline()
    print(content,end='')
    print(file.closed)

print(file.closed)



        

