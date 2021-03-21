const BASE_URL = "http://localhost:3000"

document.addEventListener("DOMContentLoaded", () => {
	renderSightWords();

	const startBtn = document.querySelector("#start-arrow")
	// startBtn.onclick = e => {

	// }

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
			btn.addEventListener("click", fetchSightWord(word.id))
			// (e) => {
			// 	fetch(BASE_URL + '/sight_words/' + word.id)
			// 	.then(resp => resp.json())
			// 	.then(sight_word => {
			// 		hideIntroLine();
			// 		const word_intro = document.querySelector("#word_intro")
			// 		word_intro.style.display = "block";
			// 		const h2 = document.querySelector("h2")
			// 		h2.innerHTML = sight_word.spelling
			// 		const audio_key = document.querySelector("#pronunciation_key")
			// 		audio_key.innerHTML = sight_word.pronunciation_key
			// 		const speaker = document.querySelector("#speaker")
			//         const audio = document.querySelector("audio")
			//         audio.setAttribute("src", `${sight_word.pronunciation_audio}`)
			//         audio.play();
			// 		speaker.onclick = e => {
			// 	        e.preventDefault();
			// 	        audio.play();
	  //     			};
			// 	})
			// })
			div.append(btn)
		}
	})
}

function hideIntroLine(){
	const intro_line = document.querySelector("#intro_line")
	if (intro_line.style.display = "block") {
		intro_line.style.display = "none";
	}
	
}

function fetchSightWord(word_id){
	fetch(BASE_URL + '/sight_words/' + word_id)
	.then(resp => resp.json())
	.then(sight_word => {
		hideIntroLine();
		const word_intro = document.querySelector("#word_intro")
		word_intro.style.display = "block";
		const h2 = document.querySelector("h2")
		h2.innerHTML = sight_word.spelling
		const audio_key = document.querySelector("#pronunciation_key")
		audio_key.innerHTML = sight_word.pronunciation_key
		const speaker = document.querySelector("#speaker")
        const audio = document.querySelector("audio")
        audio.setAttribute("src", `${sight_word.pronunciation_audio}`)
        audio.play();
		speaker.onclick = e => {
	        e.preventDefault();
	        audio.play();
		}
	})
}


function playAudio(){
	const audio = document.querySelector("audio")
	audio.play();
}
