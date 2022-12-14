import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";

function Controls(props) {
  const [count, setCount] = useState(true);
  const handleChange = (e) => {
    setCount( count + 1);
  };
  const reset = (e) => {
    setCount(0);
  };
  const DoubleClick = () =>{
    setCount(0);
  }

  return (
    <div className="c-player--controls">
      <button className="skip-btn" onClick={(e) =>{ props.SkipSong(false); reset();}}>
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <button
        className="play-btn"
        onClick={(e) => {props.setIsPlaying(!props.isPlaying); handleChange();}}
        onDoubleClick={ DoubleClick}
      >{count} โ < FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
      </button>
      <button className="skip-btn" onClick={(e) => {props.SkipSong(); reset();}}> 
        <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
  );
}
// ๐ชข๐๏ธ๐งฎ๐โ๐๐โ๏ธ  โโยปยซโโชโ$โโโโโปโนโโ
export default Controls;
