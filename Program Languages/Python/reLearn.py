#should watch again eps 55,57,58,63
def century(year):
    year=str(year)
    if year[len(year)-1] == 0 or year[len(year)-2] == 0 :
        return int(year[0:len(year)-2])