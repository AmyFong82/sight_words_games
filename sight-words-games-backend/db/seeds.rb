# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(username: "User1", password: "1")


a = SightWord.create(spelling: "a", 
					pronunciation_audio: "https://static.sfdict.com/audio/lunawav/A00/A0000100.ogg", 
					pronunciation_key: "[ uh; when stressed ey ]", 
					sentence: "May I have a pink popsicle, please?", 
					picture: "https://images.vexels.com/media/users/3/210453/isolated/preview/193ca85105f26dd0dbc539de1c1baf52-pink-popsicle-illustration-by-vexels.png")

# the = SightWord.create(spelling: "the"
# 						pronunciation_audio:
# 						pronunciation_key:
# 						sentence:
# 						picture:)

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
