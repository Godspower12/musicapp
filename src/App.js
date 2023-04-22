import {useState, useRef } from 'react';
import Library from './Component/Library';

// importing component 
import Player from './Component/player';
import Song from './Component/song';
import Nav from './Component/Nav';

//import styles
import './styles/app.scss';
//imprt uti  
import data from "./data";


function App() {

  //ref 
  const audioRef = useRef(null);
  //state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
 const [songInfo, setSongInfo] = useState({
  currentTime: 0,
  duration: 0,
  animationPercentage: 0,
});

const [libraryStatus, setLibraryStatus] = useState(false);

const timeUpdateHandler = (e) => {
  const current = e.target.currentTime;
  const duration = e.target.duration;

  // Calculate percentage 
  const roundedCurrent = Math.round(current);
  const roundedDuration = Math.round(duration);
  const animation = Math.round((roundedCurrent/roundedDuration) * 100)
  console.log(animation);
  setSongInfo({...songInfo, currentTime: current, duration, animationPercentage: animation})
  }

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
      await setCurrentSong(songs[(currentIndex + 1) % songs.length])
    if (isPlaying) audioRef.current.play()
  }
  return (  
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav libraryStatus = {libraryStatus} setLibraryStatus = {setLibraryStatus}/>
    <Song currentSong = {currentSong} />  
    <Player audioRef = {audioRef} 
    setIsPlaying = {setIsPlaying} 
    isPlaying = {isPlaying} 
    currentSong = {currentSong}
    setSongInfo = {setSongInfo}
    songInfo = {songInfo} 
    songs = {songs}
    setCurrentSong = {setCurrentSong}
    setSongs = {setSongs}
    />  
    
    <Library 
    audioRef = {audioRef} 
    songs = {songs} 
    setCurrentSong = {setCurrentSong}
    isPlaying = {isPlaying}
    setSongs = {setSongs}
    libraryStatus = {libraryStatus}
    />


    
    <audio onLoadedMetadata = {timeUpdateHandler}
      onTimeUpdate = {timeUpdateHandler} 
      ref={audioRef} 
      src={currentSong.audio}
      onEnded = {songEndHandler}
      ></audio>

<div className="attribution">
      <h3><span>Developed</span> by Gp</h3>
</div>
    </div>
  );
}

export default App;
