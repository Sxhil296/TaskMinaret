import React, { useState, useRef } from 'react';

const nasheedPlaylist = [
  { title: 'Allahu', src: '/allahu.mp3' },
  { title: 'Ya-Adheeman', src: '/ya-adheeman.mp3' },
  { title: 'The Way of the Tears', src: '/the-way-of-the-tears.mp3' },
  { title: 'Faslon ko Takalluf', src: '/faslon-ko-takalluf.mp3' },
  { title: 'Liyakun Yawmuka', src: '/liyakun-yawmuka.mp3' },
  {title : 'Maula Ya Sali Wa Sallam', src: '/Maula Ya Salli Wa Sallim Naat.mp3'}
 
];

const NasheedPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentNasheedIndex, setCurrentNasheedIndex] = useState(0);
  
    const audioRef = useRef(null);
  
    const togglePlay = () => {
      setIsPlaying(!isPlaying);
      if (!isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    };

    const handleNextNasheed = () => {
        const nextIndex = (currentNasheedIndex + 1) % nasheedPlaylist.length;
        setCurrentNasheedIndex(nextIndex);
        setIsPlaying(true);
        audioRef.current.pause();
        audioRef.current.load();
        audioRef.current.play();
      };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold mb-2">Nasheed Player</h2>
    <audio ref={audioRef} controls className="w-full">
      <source src={nasheedPlaylist[currentNasheedIndex].src} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
    <p className="text-lg mt-2">{nasheedPlaylist[currentNasheedIndex].title}</p>
    <div className="flex justify-center mt-2">
      <button
        className={`rounded px-4 py-2 ${isPlaying ? 'bg-red-500' : 'bg-green-500'} text-white mr-2`}
        onClick={togglePlay}
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <button
        className="rounded px-4 py-2 bg-blue-500 text-white"
        onClick={handleNextNasheed}
      >
        Next Nasheed
      </button>
    </div>
  </div>
  );
};

export default NasheedPlayer;