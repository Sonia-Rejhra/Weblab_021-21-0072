const but =document.getElementById("but")

function buttonPresses(){
    const container =document.getElementById("container")
     const c1=document.createElement('div')
     c1.className="c1"
     container.appendChild(c1)
}
but.onclick=buttonPresses;
function randomclick() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return "#" + randomColor;
  }
  
  console.log(generateRandom())
  randomclick.onclick=randomclick
  const arr = document.getElementsByClassName("c1")
  arr.array.forEach(element => {
      element.style.backgroundcolor=randomclick()
  });