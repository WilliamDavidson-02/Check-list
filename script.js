var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLenght() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

// Checks if there is any text in the enter tab
function addListAfterClik() {
        if (inputLenght() > 0) {
            createListElement()
        }
}

function addListAfterKeypress(event) {
    if (inputLenght() > 0 && event.code === "Enter") {
        createListElement()
    }
}

button.addEventListener("click", addListAfterClik)

input.addEventListener("keypress", addListAfterKeypress)


const list = document.getElementsByTagName('ul');

for(let i=0; i<list.length; i++)
{
	list[i].addEventListener("click", function(event) {

		event.target.classList.toggle('done');

	});
}