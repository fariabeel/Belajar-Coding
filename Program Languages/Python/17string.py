a = "JDJkjKjjkuuGhhbVVG"
print(a.upper())
print(a.lower())
print(a.isupper())
a=a.upper()
print(a.islower())
print(a.isupper())
print(a.isalpha()) #checking does it letter all
print(a.isalnum()) #checking does it letter and number
print(a.isdecimal()) #does it string is numeric?
print(a.istitle()) #does capital letter?
print('\n')

a='lughowo xiangjhang xieng wong'
print(a.endswith("xieng"))
print(a.endswith("wong"))
print(a.startswith("xianjing"))
print(a.startswith("lughowo"))

a= ['lfj','wow','real wak']
b=' kumalala kumalala savesta '.join(a)
print(b)
print(b.split(' kumalala kumalala savesta '))

print('a'.rjust(20))
print('a'.ljust(20))
print('a'.center(20))
print('a'.rjust(20,'-'))
a='a'.rjust(20,'-')
print(a.strip('-'))
a='a'.rjust(20)
print(a)
print(a.strip())