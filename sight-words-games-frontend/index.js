const BASE_URL = "http://localhost:3000";
const USERS_URL = BASE_URL + "/users";
const userform = document.querySelector(".d-flex");
const dropdown = document.querySelector(".dropdown");
const intro_line = document.querySelector(".intro-line");
const completion_status = document.querySelector("#completion-status");
const user_message_div = document.querySelector("#user-message");
const user_message = document.querySelector("#user-message h5");
const log_out_message = document.querySelector("#log-out-message");
const user_action_btn = document.querySelector(".user-action-btn");
const learned_words_list = document.querySelector(".learned-words-list");
const completed_num = document.querySelector("#completed-num");
const right_alert = document.querySelector(".alert-success");
const wrong_alert = document.querySelector(".wrong-alert");
const stars = document.querySelector(".stars");
const next_btn = document.querySelector(".next-btn");
const games_div = document.querySelector("#games_div");
const game1 = document.querySelector("#game1");
const game2 = document.querySelector("#game2");
const game3 = document.querySelector("#game3");
const chosen_letters = document.querySelectorAll(".chosen-letter");
const checkBtn = document.querySelector(".check-btn");
const letter_choices = document.querySelector(".letter-choices").children;
const key = "Sightword_CurrentUser";
const loggedIn_user = JSON.parse(localStorage.getItem(key));

document.addEventListener("DOMContentLoaded", () => {
	renderSightWords();
	userMessage(loggedIn_user);

	document.querySelector("button[type=submit]").onclick = e => login(e);

	for (let i = 0; i < 4; i++){ 
		letter_choices[i].onclick = e => clickToBox(e);
		chosen_letters[i].onclick = e => backToChoices(e);
	}

})

function hideLoginForm(){
	userform.id = "user-login"
	dropdown.style.display = "block"
	const name = document.querySelector("#dropdownMenu2")
	const loggedIn_user = JSON.parse(localStorage.getItem(key));
	console.log(loggedIn_user)
	name.innerHTML = "Hi " + loggedIn_user.username + " <i class='fas fa-grin-alt'></i>"
	const logout_btn = document.querySelector("#logout")
	logout_btn.onclick = e => logout(e);
}

function login(e){
	e.preventDefault();
  	const username = document.getElementById("username").value;
  	const password = document.querySelector("#password").value;
  	let data = {username: username, password: password}
  	fetch(USERS_URL, {
  		method: 'POST',
		headers: {
			"Content-Type": "application/json",
    		"Accept": "application/json"
		},
		body: JSON.stringify(data)
	  	})
	.then(resp => {
	  const contentType = resp.headers.get("content-type");
	    if (contentType && contentType.indexOf("application/json") !== -1) {
		    return resp.json()
			.then(user => {
				const current_user = new User(user.id, user.username, user.completion_status)
				let current_user_info = {user_id:current_user.id, username: current_user.username, completion_status: current_user.completion_status}
				localStorage.setItem(key, JSON.stringify(current_user_info));
				userMessage(current_user);
				renderCompletedWords()
			})
			hideLoginForm();
		  } else {
		    return resp.text()
		    .then(text => {
		      	const login_alert = document.querySelector(".alert-dismissible")
		      	login_alert.style.display = "block"
		    });
		  }
	})
	.catch(error => console.error(error));
}

function renderCompletedWords(){
	console.log(loggedIn_user.user_id)
	console.log(`/${loggedIn_user.user_id}`)
	fetch(USERS_URL + `/${loggedIn_user.user_id}`+ "/completed_words")
	.then(response => response.json())
	.then(completed_words => {
		console.log(completed_words)
		const div = document.querySelector(".learned-words-list")
		for(const word of completed_words){
			const btn = document.createElement("button")
			btn.classList.add("list-group-item")
			btn.setAttribute("id", word[0])
			btn.innerHTML = word[1]
			btn.addEventListener("click", e => {
				fetchSightWord(word[0])
			})
			div.append(btn)
		}
	})
}

function userMessage(loggedIn_user){
	if(loggedIn_user === null){
		intro_line.style.display = "block"
		completion_status.style.display = "none";
		user_message_div.style.display = "none";
	}else{
		hideLoginForm();
		intro_line.style.display = "none";
		completion_status.style.display = "block";
		user_message_div.style.display = "block"
		if(loggedIn_user.completion_status === 0){
			completed_num.innerHTML = "0"
			user_message.innerHTML = "Let's begin learning new sight words!"
		} else if(loggedIn_user.completion_status === 10){
			completed_num.innerHTML = loggedIn_user.completion_status
			user_message.innerHTML = "Congratulations! You've learned 10 sight words!"
			user_action_btn.innerHTML = "Start Over"
		} else if (loggedIn_user.completion_status > 0){
			completed_num.innerHTML = loggedIn_user.completion_status
			user_message.innerHTML = "Sight words you've learned:"
			renderCompletedWords()
			user_action_btn.innerHTML = "Learn More!"
		}
	}
}

function logout(e){
	localStorage.removeItem("Sightword_CurrentUser");
	userform.removeAttribute('id');
	dropdown.style.display = "none";
	completion_status.style.display = "none";
	user_message.style.display = "none";
	user_action_btn.style.display = "none";
  	let password = document.querySelector("#password");
	password.value = "";
	password.focus();
	log_out_message.style.display = "block";
	games_div.style.display = "none";
}

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

function resetLayout(){
	intro_line.style.display = "none";
	game1.style.display = "none";
	game2.style.display = "none";
	game3.style.display = "none";
	next_btn.style.display = "none";
	checkBtn.style.display = "none"
	const stars123 = stars.children
	for(let star of stars123){
		star.classList.remove("fas", "star-animation")
		star.classList.add("far")
	}
}


function playAudio(ele, file_path){
	const audio = document.querySelector(ele)
	audio.setAttribute("src", file_path);
	audio.play();
}


function fetchSightWord(word_id){
	fetch(BASE_URL + '/sight_words/' + word_id)
	.then(resp => resp.json())
	.then(sight_word => {
		resetLayout();
		stars.style.display = "block";
		const word_intro = document.querySelector("#word-intro")
		word_intro.style.display = "block";
		game1.style.display = "block";
		const main_word = document.querySelector("#main-word")
		const word = new SightWord(sight_word.id, sight_word.spelling, sight_word.audio, sight_word.word_choices, sight_word.letter_choices, sight_word.sentence, sight_word.picture);
		main_word.innerHTML = word.spelling;
		const speaker = document.querySelector("#speaker");
		playAudio("#pronunciation", word.audio)
		speaker.onclick = e => {
    		playAudio("#pronunciation", word.audio)
		}
		renderGame1(word);
		renderGame2(word);
		renderGame3(word);
	})
}

function fetchNextWord(word_id){
	const next_id = (parseInt(word_id) + 1)
	fetchSightWord(next_id)
}


function renderGame1(word){
	const star1 = document.querySelector("#star1")
	const word_choices = document.querySelector(".word-choices")
	const choice_btns = word_choices.children
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
				star1.classList.remove("far");
				star1.classList.add("fas", "star-animation")
				playAudio("#alert_audio", "sounds/right_alert_chime.mp3")
		        next_btn.style.display = "block";
		        next_btn.onclick = e => {
		        	showGame2()
		        }
		        const other_choices = document.querySelectorAll(".word-choice")
		        for(const b of other_choices){
		        	b.setAttribute("disabled", "true")
		        }
				choice_btns[i].disabled = false;
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
	for (let i = 0; i < chosen_letters.length; i++) {
		chosen_letters[i].style.display = "none"
		chosen_letters[i].innerHTML = ""
		chosen_letters[i].classList.remove("chosen-letter-blinking")
	}
	for (let i = 0; i < word.length(); i++){
		chosen_letters[i].style.display = "block"
		chosen_letters[i].disabled = false
	}
	chosen_letters[0].classList.add("chosen-letter-blinking")

	for(let i = 0; i < 4; i++) {
		const choice = letter_choices[i]
		choice.innerHTML = word.letter_choices[i]
		choice.style.color = "#000"
		choice.disabled = false;
		choice.classList.remove("btn-warning")
		choice.classList.add("btn-light")
	}
}

function showGame2(){
	next_btn.style.display = "none";
	right_alert.style.display = "none";
	game1.style.display = "none"
	game2.style.display = "block"
    for(const l of chosen_letters){
		l.classList.add("btn-light")
		l.classList.remove("btn-warning")        
	}
}

function showGame3(){
	next_btn.style.display = "none";
	right_alert.style.display = "none";
	game2.style.display = "none"
	game3.style.display = "block"
}
		

function clickToBox(e){
	wrong_alert.style.display = "none";
	const box = document.querySelector(".chosen-letter-blinking")
	if(box !== null){
		box.innerHTML = e.target.innerHTML
		box.classList.remove("chosen-letter-blinking")
		e.target.setAttribute("disabled", "true")
		e.target.style.color = "#f8f9fa"
	}	
	const word = document.querySelector("#main-word").innerHTML
	addBlinking(word)
}

function addBlinking(word){
	for (let i = 0; i < word.length; i++){
		if(chosen_letters[i].style.display === "block" && chosen_letters[i].innerHTML === ""){
			chosen_letters[i].classList.add("chosen-letter-blinking")
			break
		}
	}
	showCheckBtn(word)
}

function backToChoices(e){
	for(const l of chosen_letters){
		if(l.classList.contains("chosen-letter-blinking")){
			l.classList.remove("chosen-letter-blinking")
		}
	}
	if(e.target.innerHTML !== ""){
		for(const l of letter_choices){
			if(l.innerHTML === e.target.innerHTML){
				l.style.color = "#000"
				l.disabled = false
				e.target.innerHTML = ""
				e.target.classList.add("chosen-letter-blinking")
				break
			}
		}
	}
}


function showCheckBtn(word){
	const lastBox = chosen_letters[word.length-1]
	if(lastBox.innerHTML !== ""){
		checkBtn.style.display = "block"
	}
	checkBtn.onclick = e => {
		checkSpelling(word)
		checkBtn.style.display = "none"
	}
}

function checkSpelling(word){
	const picked_letters = []
	for(const picked_letter of chosen_letters){
		picked_letters.push(picked_letter.innerHTML)
	}
	const picked_word = picked_letters.join("")
	if(picked_word === word){
		const star2 = document.querySelector("#star2")
		star2.classList.remove("far");
		star2.classList.add("fas", "star-animation")
		right_alert.style.display = "block";
		playAudio("#alert_audio", "sounds/right_alert_chime.mp3")
        next_btn.style.display = "block";
        next_btn.onclick = e => {
			right_alert.style.display = "none";
        	showGame3()
        }
        for(const l of chosen_letters){
        	l.disabled = true;
			l.classList.remove("btn-light")
			l.classList.add("btn-warning")        
		}
        for(const l of letter_choices){
        	l.disabled = true;
        }
	}else{
		wrong_alert.style.display = "block";
		playAudio("#alert_audio", "sounds/wrong_alert_chime.mp3")
		for (let i = 0; i < word.length; i++){
			if (word[i] !== picked_letters[i]){
				const wrong_letter = chosen_letters[i].innerHTML
				chosen_letters[i].innerHTML = ""
				for(const l of letter_choices){
					if(l.innerHTML === wrong_letter){
						l.style.color = "#000"
						l.disabled = false
					}
				}
			}
		}
		addBlinking(word)
	}
}


function renderGame3(word){
	const sentence = document.querySelector("#sentence")
	sentence.innerHTML = ""
	const sentence_words = word.sentence.split(" ")
	for(let i = 0; i < sentence_words.length; i ++){
		const btn = document.createElement("button")
		btn.innerHTML = sentence_words[i]
		btn.classList.add("btn", "btn-light", "not-rounded")
		btn.addEventListener("click", e => {
			if(word.check(btn.innerHTML)){
				btn.classList.add("btn-warning")
				btn.classList.remove("btn-light")
				playAudio("#alert_audio", "sounds/right_alert_chime.mp3")
				const star3 = document.querySelector("#star3")
				star3.classList.remove("far");
				star3.classList.add("fas", "star-animation")
				right_alert.style.display = "block";
				wrong_alert.style.display = "none";
		        next_btn.style.display = "block";
		        for(const b of sentence.children){
		        	b.disabled = true;
		        }
		        next_btn.onclick = e => {
					right_alert.style.display = "none";
		        	fetchNextWord(word.id)
		        }
			}else{
				right_alert.style.display = "none";
				wrong_alert.style.display = "block";
				playAudio("#alert_audio", "sounds/wrong_alert_chime.mp3")
			}
			btn.disabled = true;
		})
		sentence.append(btn)
	}
	const image = document.querySelector("#image")
	image.src = word.picture
}

class User {
	constructor(id, username, completion_status){
		this.id = id;
		this.username = username;
		this.completion_status = completion_status;
	}

	levelUp(){
		return this.completion_status += 1
	}
}


class SightWord {
  constructor(id, spelling, audio, word_choices, letter_choices, sentence, picture){
  	this.id = id;
  	this.spelling = spelling;
  	this.audio = audio;
  	this.word_choices = word_choices.split(" ");
  	this.letter_choices = letter_choices.split(" ");
  	this.sentence = sentence;
  	this.picture = picture;
  }

  check(string){
  	const string_lowerCase = string.toLowerCase()
  	if(this.spelling === string_lowerCase){
  		return true
  	}else{
  		return false
  	}
  }

  length(){
  	return this.spelling.length
  }
}

// class Completed_words {
// 	constructor(id, user_id, word_id){
// 		this.id = id;
// 		this.user_id = user_id;
// 		this.word_id = word_id;
// 	}
// }
