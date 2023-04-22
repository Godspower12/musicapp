
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faPlay, faAngleLeft, faPause} from "@fortawesome/free-solid-svg-icons";





const Player = ({audioRef, currentSong, isPlaying, songs, setIsPlaying, setSongInfo, songInfo, setCurrentSong, setSongs}) => {
    



    
const activeLibraryHandler = (nextPrev) => {
    const newSongs = songs.map((song) => {
        if(song.id === nextPrev.id) {
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

       setSongs(newSongs);
}
    //Drag handler 
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
  setSongInfo({...songInfo, currentTime: e.target.value})
    }
    
    //SkipTrackHandler
    const skipTrackHandler =  async (direction) => {
       let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
       if(direction === "skip-forward") {
         await setCurrentSong(songs[(currentIndex + 1) % songs.length])
         activeLibraryHandler(songs[(currentIndex + 1) % songs.length])
       }  if(direction === "skip-back") {
        if((currentIndex - 1) % songs.length === - 1) {
            await setCurrentSong(songs[songs.length - 1])
            activeLibraryHandler(songs[songs.length - 1])
            if(isPlaying) audioRef.play()
            return;
        }
       await setCurrentSong(songs[(currentIndex - 1) % songs.length ])
       activeLibraryHandler(songs[(currentIndex - 1) % songs.length ])
       }
       if(isPlaying) audioRef.current.play()

    }   
    


// eventHandler
 const playSongHandler = () => {
     if(isPlaying) {
    audioRef.current.pause();
    setIsPlaying(!isPlaying);
} else{
    audioRef.current.play();
    setIsPlaying(!isPlaying)
     }
 }
 

 const getTime = (time) => {
     return (
        Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
     )
 }
 

 const trackAnim =  {
    transform: `translate(${songInfo.animationPercentage}%)`
 }

    return (
        <div className="player">
      <div className="time-control">
          <p>{getTime(songInfo.currentTime)}</p>
         
         <div  style = {{background: `linear-gradient(to right, ${currentSong.Color[0]}, ${currentSong.Color[1]})`}}  className="track">
          <input min= {0} 
          max={songInfo.duration || 0}  
          value= {songInfo.currentTime} 
          type="range"
          onChange = {dragHandler} />

          <div style={trackAnim} className="animate-track"></div>
          </div>
          <p>{songInfo.duration ? getTime(songInfo.duration): "0:00"}</p>
      </div>
      <div className="play-control">
          <FontAwesomeIcon onClick = {() => skipTrackHandler('skip-back')} className = "skip-back" size = "2x" icon = {faAngleLeft} />
          <FontAwesomeIcon onClick = {playSongHandler} className = "play" size = "2x" icon = {isPlaying ? faPause : faPlay} />
          <FontAwesomeIcon onClick = {() => skipTrackHandler('skip-forward')} className = "skip-forward" size = "2x" icon = {faAngleRight} />
      </div>

        </div>
    );
};

export default Player;