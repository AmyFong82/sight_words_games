class CompletedWord < ApplicationRecord
  belongs_to :user
  belongs_to :sight_word
end
