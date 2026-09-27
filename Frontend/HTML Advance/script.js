{
    const elem = document.getElementById("box")
  elem.style = `
  background: red;
  width: 50px;
  height: 50px;
  position: relative;
  `

  let pox = 0
  setInterval(()=>{
    pox += 100
    elem.style.left = `${pox}px`;
    if(pox >= 550) {
      pox = -90
    }
  })
}