class SongsController < ApplicationController
  before_action :set_song, only: [:show, :update, :destroy]

  # GET /songs
  def index
    @songs = Song.all
    if @songs.empty?
        render json: {message: "You have no songs, please write one down."}
    else
        render json: @songs.arr_to_json
    end
  end

  # GET /songs/1
  def show
    if @song.nil?
        render json: {message: "You have no songs, please write one down."}
    else
        render json: @song.song_to_json
    end
  end

  # POST /songs
  def create
    @artist = Artist.find_or_create_by(name: params[:artist][:name])
    @song = Song.new(song_params)
    @song.artist_id = @artist.id
    if @song.save
      render @song.song_to_json
    else
      render json: @song.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /songs/1
  def update
    @artist = Artist.find_or_create_by(name: params[:artist][:name])
    if @song.update(song_params)
      render json: @song
    else
      render json: @song.errors, status: :unprocessable_entity
    end
  end

  # DELETE /songs/1
  def destroy
    @song.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_song
      @song = Song.find_by(id: params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def song_params
      params.require(:song).permit(:title, :album_title, :year_of_release, :artist_id, artist_attributes: [
        :name
      ])
    end
end
