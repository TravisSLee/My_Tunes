class Artist < ApplicationRecord
    has_many :albums
    validates :name, presence: true

    def self.arr_to_json
        self.all.map do |a|
            a.artist_to_json
        end
    end 

    def artist_to_json
        {
            id: self.id,
            name: self.name
            
        }
    end
end
