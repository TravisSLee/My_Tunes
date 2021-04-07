class Song < ApplicationRecord
    belongs_to :artist

    def self.arr_to_json
        self.all.map do |e|
            e.entry_to_json
        end
    end 

    def entry_to_json
        {
            id: self.id,
            title: self.title,
            album_title: self.album_title
            year_of_release: self.year_of_release,
            artist: self.artist
            
        }
    end
end
