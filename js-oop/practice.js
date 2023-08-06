
const items = document.getElementsByClassName('item');

for(let i=0; i < items.length ; i++){
   let item = items[i];
    item.addEventListener('click' , function(e){
        console.log(e.target.parentNode.removeChild(e.target))
    })
}

const btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    const list  = document.getElementById("items");
    const addnew = document.createElement("li");
    addnew.innerText = "Add new item";
    list.appendChild(addnew);
})