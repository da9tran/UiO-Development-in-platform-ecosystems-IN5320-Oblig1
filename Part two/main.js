// Add a country when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);

  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
    
//delete button

  let deleteButton = document.createElement("span");
  deleteButton.innerHTML = "\u274c"
  li.appendChild(deleteButton);

  deleteButton.addEventListener("click",function(){
    let listItem = this.parentNode;
    let li = listItem.parentNode;
    li.removeChild(listItem);
  });
}

// Search function
function search(value){
  view = []
	const elems = document.getElementById("myUL").childNodes;
	for(let i = 0; i < elems.length; i++){                         if(elems[i].innerText.toLowerCase().search(value.toLowerCase())){
      elems[i].style = "display: none;"
		}else{
      elems[i].style = "display: block;"
    }
}
}