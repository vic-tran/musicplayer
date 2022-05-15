import React from 'react'
import "./controls.css";
import { IconContext } from "react-icons";
import { FaPause } from "react-icons/fa";
import {IoPlaySkipBack, IoPlaySkipForward, IoPlay} from "react-icons/io5";

export default function Controls({
    isPlaying, 
    setIsPlaying, 
    handleNext, 
    handlePrev
}){
 
/* import icons to use play pause forward and backward functions made in audioplayer component */
  return (
   <IconContext.Provider value={{size:"35px", color: "FFFFFF"}}>
    <div className="control-wrapper flex">
        <div className="action-btn flex" onClick={handlePrev}>
            <IoPlaySkipBack />
        </div>

        <div 
        /* if playing then btn is not playing set to pause, else set to play */
        className={
            isPlaying ? "play-pause-btn flex active" : "play-pause-btn flex"
        }
             onClick={() => setIsPlaying(!isPlaying)}>
            { isPlaying ? <FaPause /> : <IoPlay />}
        </div>

        <div className="action-btn flex" onClick={handleNext}>
            <IoPlaySkipForward />
        </div>
    </div>

   </IconContext.Provider>
  )
}
