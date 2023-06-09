

const LibrarySong = ({song, setCurrentSong, songs, id, audioRef, isPlaying, setSongs}) => {


     const songSelectHandler = async () => {
        await setCurrentSong(song);
    
       // Add active state
      
       const newSongs = songs.map((song) => {
        if(song.id === id) {
            return {
                ...song,
                active: true,
                
            }
        }else {
            return {
                ...song, 
                active: false
            }
        }
       });

       await setSongs(newSongs);
       
       
        //Check if the song is playing 
        if(isPlaying) audioRef.play()
       
         
     }
    return (
        <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ''}`}>
<img alt={song.name} src ={song.cover}></img>
<div className="song-description">
<h3>{song.name}</h3>
<h4>{song.artist}</h4>
</div>
        </div>
    );
};

export default LibrarySong;

