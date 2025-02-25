import printProg # run printProg.py too
import ro
# both of them can called module
# all of programming file can called module

#A module in Python is a file that contains Python code,
#such as functions, variables, and classes, 
#that can be imported into other Python programs.

print(ro.a)
print(ro.b(2,2)) # multiply

import ro as z

print(z.a)
print(z.b(2,1))

import Package.function # Package folder called package
print(Package.function.a(2,3)) # to the power of

from Package import function
print(function.a(4,2))

import Package.function as P
print(P.a(3,2))
