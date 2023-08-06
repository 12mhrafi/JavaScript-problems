window.Onload = () => {
    mainFunc();
}

function mainFunc(){
    const root =  document.getElementById("root");
    const buttonC = document.getElementById("change-btn");
  

    buttonC.addEventListener("click" , ()=> {
        let bgcolor  = randHexGenerate();
		root.style.backgroundColor = bgcolor;
    
    })

}


function randHexGenerate(){
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

