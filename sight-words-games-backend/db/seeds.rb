# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(username: "User1", password: "1")

at = SightWord.create(spelling: "at", 
					audio: "https://static.sfdict.com/audio/lunawav/NEW/NEW10235.ogg",
					word_choices: "an am at et",
					letter_choices: "t d a e",
					sentence: "Is that fish looking at me?", 
					picture: "https://pyxis.nymag.com/v1/imgs/bc4/9c9/fde191e88b8b4c007822555bdd4019c38f-20-dream-fish.2x.rhorizontal.w700.jpg")

the = SightWord.create(spelling: "the",
						audio: "https://img2.tfd.com/pron/mp3/en/US/df/dfsfdodyhs.mp3",
						word_choices: "then the ten them",
						letter_choices: "e h t l",
						sentence: "The dog is brown.",
						picture: "https://thehappypuppysite.com/wp-content/uploads/2018/10/brown-dog-names-long.jpg")

of = SightWord.create(spelling: "of", 
					audio: "https://static.sfdict.com/audio/lunawav/O00/O0050100.ogg",
					word_choices: "of on ot off",
					letter_choices: "o l f e",
					sentence: "I have a cup of milk.", 
					picture: "https://image.freepik.com/free-photo/girl-holding-glass-milk_23-2148277058.jpg")

to = SightWord.create(spelling: "to", 
					audio: "https://ssl.gstatic.com/dictionary/static/sounds/20200429/to--_us_2.mp3",
					word_choices: "of on to at",
					letter_choices: "o l t a",
					sentence: "We like to read.", 
					picture: "images/2kids_reading.jpg")

is = SightWord.create(spelling: "is", 
					audio: "https://static.sfdict.com/audio/lunawav/I03/I0315300.ogg",
					word_choices: "in is es as",
					letter_choices: "s i l e",
					sentence: "This is my friend.", 
					picture: "https://image.freepik.com/free-vector/thai-boy-girl-smiling_1308-38177.jpg")

you = SightWord.create(spelling: "you",
						audio: "https://static.sfdict.com/audio/lunawav/Y00/Y0041100.ogg",
						word_choices: "you yeah yell too",
						letter_choices: "y u o l",
						sentence: "Do you like pizza?",
						picture: "https://images.pexels.com/photos/4193872/pexels-photo-4193872.jpeg?cs=srgb&dl=pexels-ponyo-sakana-4193872.jpg&fm=jpg")

that = SightWord.create(spelling: "that",
						audio: "https://static.sfdict.com/audio/lunawav/T01/T0196400.ogg",
						word_choices: "then these that than",
						letter_choices: "t h t a",
						sentence: "That cake looks yummy!",
						picture: "https://images.pexels.com/photos/3913295/pexels-photo-3913295.jpeg?cs=srgb&dl=pexels-svetlana-b-3913295.jpg&fm=jpg")

it = SightWord.create(spelling: "it",
						audio: "https://static.sfdict.com/audio/lunawav/I03/I0348600.ogg",
						word_choices: "at to eat it",
						letter_choices: "i h t d",
						sentence: "It is raining.",
						picture: "https://images.pexels.com/photos/3761511/pexels-photo-3761511.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3761511.jpg&fm=jpg")

he = SightWord.create(spelling: "he",
						audio: "https://static.sfdict.com/audio/lunawav/H01/H0133500.ogg",
						word_choices: "hen he ten ha",
						letter_choices: "e h a l",
						sentence: "He is playing soccer.",
						picture: "https://image.freepik.com/free-vector/boy-playing-soccer-throwing-ball_7710-104.jpg")

she = SightWord.create(spelling: "she",
						audio: "https://static.sfdict.com/audio/lunawav/S04/S0422800.ogg",
						word_choices: "he the sue she",
						letter_choices: "e h t s",
						sentence: "She has a camera.",
						picture: "https://images.pexels.com/photos/189857/pexels-photo-189857.jpeg?cs=srgb&dl=pexels-jessica-lewis-189857.jpg&fm=jpg")