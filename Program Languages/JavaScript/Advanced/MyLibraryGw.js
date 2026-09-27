Array.prototype.max = function() {return Math.max(...this)};
Number.prototype.pow = function(x) {return this**x};


window.elem = function(x) {return document.getElementById(x)}

// bad
HTMLElement.prototype.writing = function() {
    for (let i of arguments) {
        this.innerHTML += i + "<br>"
    }
};

// bad
HTMLElement.prototype.set = function(x) {
    this.innerHTML = x
}

const demo = document.getElementById('demo')
const demos = document.getElementById('demos')
const button = document.getElementById('button')
const autton = document.getElementById('autton')
const cutton = document.getElementById('cutton')
function Demo(x) {demo.innerHTML = x}
function Demos(x) {demos.innerHTML = x}
function Button(x,y) {button.addEventListener(x,y)}
function Autton(x,y) {autton.addEventListener(x,y)}
function Cutton(x,y) {cutton.addEventLisntener(x,y)}

// more bad
Object.prototype.writingo = function() {
    for (let i of arguments) {
        this.innerHTML += i + "<br>"
    }
};


// great
class Elem{
    constructor(x) {
        this.elem = document.getElementById(x)
    }

    writing(...content) {
        for (let i of content) {
            this.elem.insertAdjacentHTML("beforeend", i + "<br>")
        }
    }
}

Array.prototype.maxc = function() {console.log(Math.max(...this))};
Number.prototype.powc = function(x) {console.log(this**x)};