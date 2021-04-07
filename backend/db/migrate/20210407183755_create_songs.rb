class CreateSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :songs do |t|
      t.string :title
      t.string :album_title
      t.integer :year_of_release
      t.integer :artist_id

      t.timestamps
    end
  end
end
