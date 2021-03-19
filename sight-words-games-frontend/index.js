const BASE_URL = "http://localhost:3000"

document.addEventListener("DOMContentLoaded", () => {
	renderSightWords();

})

function renderSightWords(){
	const h3 = document.querySelector("h3")
	const ul = document.createElement("ul")
	h3.append(ul)
	fetch(BASE_URL + '/sight_words')
	.then(resp => resp.json())
	.then(sight_words => {
		for (const word of sight_words){
			const li = document.createElement("li")
			const a = document.createElement("a")
			a.innerHTML = word.spelling
			a.href = BASE_URL + "/sight_words/" + word.id 
			li.append(a)
			ul.append(li)
		}
	})
}