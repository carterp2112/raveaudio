import React from 'react'
import { useState } from 'react';
import * as Tone from 'tone';


function Record() {
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [audioChunks, setAudioChunks] = useState([]);
    const [audioUrl, setAudioUrl] = useState(null);

    const startRecording = () => {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                const recorder = new MediaRecorder(stream);
                recorder.ondataavailable = event => setAudioChunks(prev => [...prev, event.data]);
                recorder.start(1);
                setMediaRecorder(recorder);
            })
            .catch(error => console.error("Error accessing microphone:", error));
    };

    const stopRecording = () => {
        mediaRecorder.stop();
        mediaRecorder.onstop = () => {
            const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
            setAudioChunks([]);
            setAudioUrl(URL.createObjectURL(audioBlob));
        };
    };

    const playRecording = () => {
        if (audioUrl) {
            const audio = new Audio(audioUrl);
            audio.play();
        } else {
            console.error("No recording available to play");
        }
    };

    async function alienRecording() {
        try {
            await Tone.start();
            const player = new Tone.Player(audioUrl);
            const pitchShiftEffect = new Tone.PitchShift(5).toDestination();
    
            player.connect(pitchShiftEffect);
    
            player.autostart = true;
        } catch (error) {
            console.error('Error playing audio:', error);
        }
    }

    async function chipmunkRecording() {
        try {
            await Tone.start(); 
            const player = new Tone.Player(audioUrl);
            const pitchShiftEffect = new Tone.PitchShift(20).toDestination();
    
            player.connect(pitchShiftEffect);
    
            player.autostart = true;
        } catch (error) {
            console.error('Error playing audio:', error);
        }
    }

    async function trollRecording() {
        try {
            await Tone.start(); 
            const player = new Tone.Player(audioUrl);
            const pitchShiftEffect = new Tone.PitchShift(-10).toDestination();
    
            player.connect(pitchShiftEffect);
    
            player.autostart = true;
        } catch (error) {
            console.error('Error playing audio:', error);
        }
    }

  return (
    <div className='recorder'>
      <h1>Use the buttons below:</h1>
      <section>
        <button onClick={startRecording}>🔴</button>
        <button onClick={stopRecording}>⬛</button>
        <button onClick={playRecording}>▶️</button>
      </section>
      {audioUrl && <a href={audioUrl} download="recording.webm"><button>Download Recording</button></a>}
      {audioUrl && <section>
        <button onClick={alienRecording}>👽</button>
        <button onClick={chipmunkRecording}>🐿️</button>
        <button onClick={trollRecording}>🧌</button>
      </section>}
        <button onClick={() => location.reload()}>New Recording</button>
    </div>
  )
}

export default Record
