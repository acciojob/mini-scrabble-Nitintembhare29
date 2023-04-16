//your code here
const textInput = document.querySelector("#evaluatedText");
const count = document.querySelector("#letterCount");

textInput.addEventListener("input", ()=>{
	const text = textInput.value;
	const length = text.length;
	count.innerText = length;
})