import React from 'react'
import LibrarySong from './LibrarySong'

const Library = ({isPlaying, audioRef, songs, setCurrentSong,setSongs, libraryStatus}) => {
  return (
    <div className= {`library ${libraryStatus ? 'active-library': ''}`}>
        <h2>Library</h2>
        <div className="library-songs">
            {songs.map(song => (
                <LibrarySong 
                id = {song.id} 
                key= {song.name} 
                song = {song} 
                songs = {songs} 
                setCurrentSong = {setCurrentSong} 
                audioRef = {audioRef}
                isPlaying = {isPlaying}
                setSongs = {setSongs} 
                />
            ))}
        </div>
    </div>
  ) 
}

export default Library