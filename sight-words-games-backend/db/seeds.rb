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
						audio: "https://static.sfdict.com/audio/lunawav/NEW2016/the_000.ogg",
						word_choices: "then the ten them",
						letter_choices: "e h t l",
						sentence: "The dog is brown.",
						picture: "https://thehappypuppysite.com/wp-content/uploads/2018/10/brown-dog-names-long.jpg")

# of = SightWord.create(spelling: "of"
of = SightWord.create(spelling: "of", 
					audio: "https://static.sfdict.com/audio/lunawav/O00/O0050100.ogg",
					word_choices: "of on ot off",
					letter_choices: "o l f e",
					sentence: "I have a cup of milk.", 
					picture: "https://image.freepik.com/free-photo/girl-holding-glass-milk_23-2148277058.jpg")

# to = SightWord.create(spelling: "to"
# 						pronunciation_audio:
# 						pronunciation_key:
# 						sentence:
# 						picture:)

# is = SightWord.create(spelling: "is"
# 						pronunciation_audio:
# 						pronunciation_key:
# 						sentence:
# 						picture:)

# you = SightWord.create(spelling: "you"
# 						pronunciation_audio:
# 						pronunciation_key:
# 						sentence:
# 						picture:)

# that = SightWord.create(spelling: "that"
# 						pronunciation_audio:
# 						pronunciation_key:
# 						sentence:
# 						picture:)

# it = SightWord.create(spelling: "it"
# 						pronunciation_audio:
# 						pronunciation_key:
# 						sentence:
# 						picture:)

# he = SightWord.create(spelling: "he"
# 						pronunciation_audio:
# 						pronunciation_key:
# 						sentence:
# 						picture:)

# she = SightWord.create(spelling: "she"
# 						pronunciation_audio:
# 						pronunciation_key:
# 						sentence:
# 						picture:)