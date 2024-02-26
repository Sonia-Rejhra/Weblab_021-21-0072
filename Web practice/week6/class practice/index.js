const h1 = document.getElementById("h1")
console.log(h1)
h1.style.backgroundColor="red"
const but =document.getElementById("but")
but.style.backgroundColor="blue"
function buttonPresses(){
    // alert('asdjhk')
    const container =document.getElementById("container")

    console.log(" i am button. ")
     const ball=document.createElement('div')
     ball.className="ball"
     container.appendChild(ball)
}
but.onclick=buttonPresses;
