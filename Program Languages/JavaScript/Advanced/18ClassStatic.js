class Real{
    constructor(obj) {
        this._obj = obj
    }
    static real() {return "wow"}
    static forReal(x) {return "it's " + x._obj}
}
console.log(Real.real())

let object = new Real("anjass")
// console.log(object.real()) error