window.Onload = () =>{
   myFunc();
}

function myFunc(){
    let bgColor = document.getElementsByClassName("bg");
	let buttonC = document.getElementsByClassName("btn");
	
	buttonC.addEventListener("click" , ()=>{
		let bgcolor = generateRandomColor();
		bgColor.style.backgroundColor = bgcolor;
	})


}


function generateRandomColor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `rgb(${red},${green},${blue})`;
}
console.log(generateRandomColor())


