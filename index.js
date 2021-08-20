const enterBtn = document.getElementById("enter");
const input = document.getElementById("userInput");
const ul = document.querySelector("ul");

const items = document.querySelectorAll("li");

function inputLength(){
	return input.value.length ;
}

// console.log(items.length);

function createListElement(){
	const li = document.createElement("li");

	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	function crossOut(){
		li.classList.toggle('done');
	}

	li.addEventListener("click",crossOut);

	// create delete icon
	const deleteBtn = document.createElement('button');
	deleteBtn.appendChild(document.createTextNode("X"));
	li.appendChild(deleteBtn);

	deleteBtn.addEventListener("click", deleteListItem);
	function deleteListItem(){
		li.classList.add("delete");
		setTimeout(function(){
			li.style.display = "none";
		}, 500);
	}

}


function addListAfterClick(){
	if(inputLength() > 0)
	{
		createListElement();
	}
}

// add items using click
enterBtn.addEventListener("click", addListAfterClick );

// add items using enter
input.addEventListener("keypress", (event) => {
	if(inputLength() > 0 && event.which===13){
		createListElement();
	}
});
