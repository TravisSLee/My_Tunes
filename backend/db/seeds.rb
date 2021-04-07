# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Artist.destroy_all
Song.destroy_all

Artist.create(id: 1, name: "Linkin Park");
Song.create(id: 1, title: "Numb", album_title: "Meteora", year_of_release: "2003", artist_id: 1);
Song.create(id: 2, title: "Leave Out All The Rest", album_title: "Minutes To Midnight", year_of_release: "2007", artist_id: 1);

