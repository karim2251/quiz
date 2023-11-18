import React, { useState } from 'react';

export default function Haed_quiz() {

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [icon, setIcon] = useState("bi bi-arrows-fullscreen");

  const toggleFullscreen = () => {
    const element = document.documentElement;

    if (!isFullscreen) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
      setIcon("bi bi-fullscreen-exit")
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      setIcon("bi bi-arrows-fullscreen")
    }

    setIsFullscreen(!isFullscreen);
  };

  return (
    <nav class="nav head-quiz">
    <p> 
         <a class="nav-link links hover"><i class="bi bi-music-note"></i></a>
         <a class="nav-link links"><i class="bi bi-quora"></i> <span> 9/15</span></a>
    </p>
<p>

    <a class="nav-link links"><i class="bi bi-check-circle-fill nace_result"></i><span> 6/15</span></a>
    <a class="nav-link links"><i class="bi bi-x-circle-fill bad_result"></i> <span> 3/15</span></a>
</p>

    <p> 
         <a class="nav-link links"><i class="bi bi-award result"></i> <span>40%</span></a>
         <a class="nav-link links hover" onClick={toggleFullscreen}><i class={icon}></i></a>
    </p>
</nav>
  )
}
