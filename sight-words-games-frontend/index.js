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
			// btn.setAttribute("id", `${word.spelling}`)
			btn.innerHTML = word.spelling
			btn.addEventListener("click", e => {
				fetchSightWord(word.id)
			})
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

 
// fetch("http://localhost:3000/sight_words/1")
// .then(resp => resp.json())
// .then(sight_word => {
// 	let word = new SightWord(sight_word.spelling, sight_word.audio, sight_word.word_choices, sight_word.sentence, sight_word.picture)
// 	console.log(word.spelling === "an")
// })

function fetchSightWord(word_id){
	fetch(BASE_URL + '/sight_words/' + word_id)
	.then(resp => resp.json())
	.then(sight_word => {
		hideIntroLine();
		const word_intro = document.querySelector("#word_intro")
		word_intro.style.display = "block";
		const main_word = document.querySelector("#main_word")
		const word = new SightWord(sight_word.spelling, sight_word.audio, sight_word.word_choices, sight_word.sentence, sight_word.picture)
		main_word.innerHTML = word.spelling
		const badge_sm = document.querySelector("h5 .badge")
		badge_sm.innerHTML = word.spelling
		const speaker = document.querySelector("#speaker")
        const audio = document.querySelector("audio")
        audio.setAttribute("src", word.audio)
        audio.play();
		speaker.onclick = e => {
	        e.preventDefault();
	        audio.play();
		}
		const word_choices = document.querySelector(".word_choices")
		if (word_choices.children.length !== 4){
			for(let i = 0; i < 4; i++) {
				const choice_btn = document.createElement("button")
				choice_btn.classList.add("btn", "btn-outline-success", "btn-lg")
				choice_btn.innerHTML = word.word_choices[i]
				choice_btn.addEventListener("click", e => {
					word.check(choice_btn.innerHTML)
				})
				word_choices.append(choice_btn)
			}
		}
	})
}


function playAudio(){
	const audio = document.querySelector("audio")
	audio.play();
}

class SightWord {
  constructor(spelling, audio, word_choices, sentence, picture){
  	this.spelling = spelling;
  	this.audio = audio;
  	this.word_choices = word_choices.split(" ");
  	this.sentence = sentence;
  	this.picture = picture;
  }

  check(string){
  	if(this.spelling === string){
  		alert("Correct!");
  	}else{
  		alert("Try again!");
  	}
  }
}
