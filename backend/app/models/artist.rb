class Artist < ApplicationRecord
    has_many :albums

    def self.arr_to_json
        self.all.map do |e|
            e.entry_to_json
        end
    end 

    def entry_to_json
        {
            id: self.id,
            name: self.name
            
        }
    end
end
