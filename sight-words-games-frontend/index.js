const BASE_URL = "http://localhost:3000"

document.addEventListener("DOMContentLoaded", () => {
	renderSightWords();

})

function renderSightWords(){
	const sightword_list_col = document.querySelector(".sightword_list_col")
	const div = document.createElement("div")
	div.classList = "list-group"
	sightword_list_col.append(div)
	fetch(BASE_URL + '/sight_words')
	.then(resp => resp.json())
	.then(sight_words => {
		for (const word of sight_words){
			const a = document.createElement("a")
			a.classList.add("list-group-item", "list-group-item-action")
			a.setAttribute("id", `${word.spelling}`)
			a.innerHTML = word.spelling
			a.href = "#" 
			a.addEventListener("click", (e) => {
				const sight_word = e.currentTarget.getAttribute("id")
				const game_page = document.querySelector(".exercises_col")
				const intro_line = document.querySelector("#intro_line")
				intro_line.style.display = "none";
			})
			div.append(a)
		}
	})
}

function startWordGame(){
	const sight_word = document.querySelector("")
}
