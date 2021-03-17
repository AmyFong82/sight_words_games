# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(name: "User1", email: "user1@email.com")


a = SightWord.create(spelling: "a", pronunciation_audio: "https://static.sfdict.com/audio/lunawav/A00/A0000100.ogg", 
	pronunciation_key: "[ uh; when stressed ey ]", sentence: "May I have a pink popsicle, please?", picture: "https://images.vexels.com/media/users/3/210453/isolated/preview/193ca85105f26dd0dbc539de1c1baf52-pink-popsicle-illustration-by-vexels.png")

completed_words1 = CompletedWord.create(user: user1, sight_word: a)
