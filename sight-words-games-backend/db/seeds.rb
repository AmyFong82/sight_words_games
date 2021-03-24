# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(username: "User1", password: "1")


at = SightWord.create(spelling: "at", 
					pronunciation_audio: "https://static.sfdict.com/audio/lunawav/NEW/NEW10235.ogg", 
					sentence: "Is that fish looking at me?", 
					picture: "https://pyxis.nymag.com/v1/imgs/bc4/9c9/fde191e88b8b4c007822555bdd4019c38f-20-dream-fish.2x.rhorizontal.w700.jpg")

the = SightWord.create(spelling: "the",
						pronunciation_audio: "https://static.sfdict.com/audio/lunawav/NEW2016/the_000.ogg",
						sentence: "The??",
						picture: "hkfdsk")

# of = SightWord.create(spelling: "of"
# 						pronunciation_audio:
# 						pronunciation_key:
# 						sentence:
# 						picture:)

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

completed_words1 = CompletedWord.create(user: user1, sight_word: a)
