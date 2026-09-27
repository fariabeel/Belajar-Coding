import datetime
a= datetime.datetime.now()
print(a)
print(a.year)
print(datetime.datetime.now().year)
print(datetime.datetime.now().strftime('%A')) #day

from collections import Counter
a = ["a","b","c","d","a","d","a"]
print(Counter(a))
print(Counter(a)['a']) # count of string a
b=Counter(a)
print(b['d']) # count of string d

import io
print(io.open("file_text.txt","r").read())
# open file file_text.txt
# i dunno but file_text must not inside folder
# look folder name testing

print(f'{__name__}')
#look up
