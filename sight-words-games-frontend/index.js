const BASE_URL = "http://localhost:3000"
const right_alert = document.querySelector(".alert-success")
const wrong_alert = document.querySelector(".alert-warning")
const stars = document.querySelector(".stars")
const next_btn = document.querySelector(".next-btn")
const game1 = document.querySelector("#game1")
const game2 = document.querySelector("#game2")
const game3 = document.querySelector("#game3")

document.addEventListener("DOMContentLoaded", () => {
	renderSightWords();

	const startBtn = document.querySelector("#start-arrow")
	startBtn.onclick = e => {
		fetchSightWord(1)
	}

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
			btn.setAttribute("id", word.id)
			btn.innerHTML = word.spelling
			btn.addEventListener("click", e => {
				fetchSightWord(word.id)
				const non_active_btns = document.querySelectorAll(".list-group button")
				for (const b of non_active_btns){
					b.classList.remove("active")
				}
				btn.classList.add("active")
				right_alert.style.display = "none";
				wrong_alert.style.display = "none";
			})
			div.append(btn)
		}
	})
}

function hideIntroLine(){
	const intro_line = document.querySelector("#intro-line")
	if (intro_line.style.display = "block") {
		intro_line.style.display = "none";
	}	
}

function playAudio(ele, file_path){
	const audio = document.querySelector(ele)
	audio.setAttribute("src", file_path);
	audio.play();
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
		stars.style.display = "block";
		const word_intro = document.querySelector("#word-intro")
		word_intro.style.display = "block";
		game1.style.display = "block";
		const main_word = document.querySelector("#main-word")
		const word = new SightWord(sight_word.spelling, sight_word.audio, sight_word.word_choices, sight_word.sentence, sight_word.picture);
		main_word.innerHTML = word.spelling;
		const badge_sm = document.querySelector("h4 .badge");
		badge_sm.innerHTML = word.spelling;
		const speaker = document.querySelector("#speaker");
		playAudio("#pronunciation", word.audio)
		speaker.onclick = e => {
    		playAudio("#pronunciation", word.audio)
		}
		renderGame1(word);
	})
}


function renderGame1(word){
	next_btn.style.display = "none";
	const word_choices = document.querySelector(".word-choices")
	const choice_btns = word_choices.children
	const star1 = document.querySelector("#star1")
	for(let i = 0; i < 4; i++) {
		choice_btns[i].innerHTML = word.word_choices[i]
		choice_btns[i].disabled = false;
		choice_btns[i].classList.remove("btn-warning")
		choice_btns[i].classList.add("btn-light")
		choice_btns[i].addEventListener("click", e => {
			if(word.check(choice_btns[i].innerHTML)){
				choice_btns[i].classList.remove("btn-light")
				choice_btns[i].classList.add("btn-warning")
				right_alert.style.display = "block";
				wrong_alert.style.display = "none";
				choice_btns[i].disabled = false;
				star1.classList.remove("far");
				star1.classList.add("fas", "star-animation")
				playAudio("#alert_audio", "sounds/right_alert_chime.mp3")
		        next_btn.style.display = "block";
		        next_btn.onclick = e => {
		        	renderGame2(word)
		        }
		        const other_choices = document.querySelectorAll(".btn-light")
		        for(const b of other_choices){
		        	b.setAttribute("disabled", "true")
		        }
			}else{
				wrong_alert.style.display = "block";
				right_alert.style.display = "none";
				choice_btns[i].setAttribute("disabled", "true")
				playAudio("#alert_audio", "sounds/wrong_alert_chime.mp3")
			}
		})
	}
}

function renderGame2(word){
	next_btn.style.display = "none";
	right_alert.style.display = "none";
	game1.style.display = "none"
	game2.style.display = "block"
	const word_in_q = document.querySelector("#game2 h4 .badge")
	word_in_q.innerHTML = word.spelling
	const chosen_letters = document.querySelector(".chosen-letters")
	for (let i = 0; i < word.length(); i++){
		const letter = document.createElement("div")
		chosen_letters.append(letter)
		letter.className = "chosen-letter"
	}
	for(const letter in word){

	}


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
  		return true
  	}else{
  		return false
  	}
  }

  length(){
  	return this.spelling.length
  }

}
