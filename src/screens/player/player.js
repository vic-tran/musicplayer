import React, { useEffect, useState } from 'react';
import "./player.css";
import { useLocation } from "react-router-dom";
import apiClient from '../../spotify';
import SongCard from '../../components/songCard';
import Queue from '../../components/sidebar/queue';
import AudioPlayer from '../../components/audioPlayer';

export default function Player() {
  const location = useLocation();
  const [tracks,setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0); 
  
  /*use apiClient to get tracks from spotify playlist */
  
  useEffect(() => {
    if(location.state){
      apiClient
      .get("playlists/" + location.state?.id + "/tracks")
      .then((res) => {
        setTracks(res.data.items);
        setCurrentTrack(res.data.items[0].track);
      })
    }   
  },[location.state]);

  /* set tracks to current track in playlist */

  useEffect(() => {
    try {
    setCurrentTrack(tracks[currentIndex].track);} catch(e){

    }
  }, [currentIndex, tracks]); 


 

  /*player to display tracks and album info + progress Circle to show current track playing */
  return (
    <div className="screen-container flex">
      <div className="left-player-body">
        <AudioPlayer currentTrack={currentTrack} isPlaying={true}/>
      </div>

      <div className="right-player-body">
        <SongCard album={currentTrack.album}/>
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
      </div>
    </div>
  );
}
