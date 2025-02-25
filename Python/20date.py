import datetime as dt
def z(a):
    print(a)
print(dt.date(2000,6,1)) #birth date
print(dt.date.today()) #now
a=dt.date.today()-dt.date(2000,6,1) #old

z(a)
z(f'''{str(a.days//365)} years old 
{str(a.days%365//30)} month''') 

print(f'{dt.date(2000,6,1):%A}') #born day
