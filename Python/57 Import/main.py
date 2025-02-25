from ro import a
from ro import b
print(f'{a} - {b(2,2)}')
import package #running file name __init__ 
# without name __init__ running nothing

package.function.a() #from function file, look init file
#c() not able, look init file

from package import * #look in init
function.a()
ab.a()
