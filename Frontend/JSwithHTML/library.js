function appendElem(x='div',y='p',z='demo') {
    let container = document.getElementById(x)
    let child = document.createElement(y)
    let text = document.createTextNode(z)
    child.appendChild(text)
    container.appendChild(child)
}

function createElem(x='p',y='text') {
    x = document.createElement(x)
    y = document.createTextNode(y)
    x.appendChild(y)
    return x
}

function test() {
    return "work"
}