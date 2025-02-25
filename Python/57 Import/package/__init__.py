from . import function
# init will not able to take function a
# in function file if not import it
print('init running')

from .function import a as c #not able to do it in main.py

__all__=[ # you can do it if the import way was
    #package import * in main.py
    'function',
    'ab'
]