import React, { useState, useEffect} from 'react';
import TrackPlayer from 'react-native-track-player'

// TrackPlayer.setupPlayer().then(() => {
//   // The player is ready to be used
// })


const Player = () => {
  useEffect(() => {
    const start = async() => {

      await TrackPlayer.setupPlayer();
  
      await TrackPlayer.add({
        id: '01',
        url: 'https://ia600204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_0_shakespeare.mp3',
        title: 'Titulo',
        artist: 'Artista'
      })
  
      await TrackPlayer.play()
    }
  
    start();
  },[])
  
  return(
    <h1>Player</h1>
  )
}

export default Player