#useless pass
#learn again bout this
counter=0
while counter<=5: #Attempt
    counter+=1
    if counter==5:
        counter+=1
        pass #just tell if not execute
        print(counter)

print("-"*5)

counter=0
while counter < 5: #Reference
    counter += 1
    if counter == 3:
        pass #like this didn't execute
        print(counter)

print("-"*5)

counter=0
while counter<=7: #Error
    print(counter)
    counter+=1
    if counter==5:
        pass #useless, can delete
        counter+=1 #don't use =+ instead +=