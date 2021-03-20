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
			const btn = document.createElement("button")
			btn.classList.add("list-group-item", "list-group-item-action")
			btn.setAttribute("id", `${word.spelling}`)
			btn.innerHTML = word.spelling
			btn.addEventListener("click", (e) => {
				fetch(BASE_URL + '/sight_words/' + word.id)
				.then(resp => resp.json())
				.then(sight_word => {
					const game_page = document.querySelector(".exercises_col")
					const intro_line = document.querySelector("#intro_line")
					intro_line.style.display = "none";
					const word_intro = document.querySelector("#word_intro")
					word_intro.style.display = "block";
					const h2 = document.querySelector("h2")
					h2.innerHTML = sight_word.spelling
					const audio_key = document.querySelector("#pronunciation_key")
					audio_key.innerHTML = sight_word.pronunciation_key
					const speaker = document.querySelector("#speaker")
			        const audio = document.querySelector("audio")
			        audio.setAttribute("src", `${sight_word.pronunciation_audio}`)
					speaker.onclick = e => {
				        e.preventDefault();
				        audio.play();
	      			};
				})
			})
			div.append(btn)
		}
	})
}

            // <div>
            //   <h2 id="main_word">a <span><i color = #6ddccf class="fas fa-volume-up"></i></span></h2>
            //   <h4 ></h4>
            // </div>

function startWordGame(){
	const sight_word = document.querySelector("")
}

function playAudio(){
	const audio = document.querySelector("audio")
	audio.play();
}
