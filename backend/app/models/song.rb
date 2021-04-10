class Song < ApplicationRecord
    belongs_to :artist
    validates :title, :year_of_release, :album_title, presence: true
    accepts_nested_attributes_for :artist

    def self.arr_to_json
        self.all.map do |s|
            s.song_to_json
        end
    end 

    def song_to_json
        {
            id: self.id,
            title: self.title,
            album_title: self.album_title,
            year_of_release: self.year_of_release,
            artist: {
                id: self.artist.id,
                name: self.artist.name
            }
            
        }
    end
end
