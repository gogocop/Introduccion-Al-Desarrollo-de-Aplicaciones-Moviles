// Tab2.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonThumbnail,
  IonButton,
  IonIcon
} from '@ionic/react';

interface Recording {
  id: string;
  gen: string;
  sp: string;
  en: string;
  rec: string;
  cnt: string;
  loc: string;
  file: string;
  length: string;
  time: string;
  date: string;
  osci?: {
    small?: string;
  };
}

const Tab2: React.FC = () => {
  const [recordings, setRecordings] = useState<Recording[]>([]);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://xeno-canto.org/api/2/recordings?query=cnt:guatemala');
        setRecordings(response.data.recordings);
      } catch (error) {
        console.error('Error fetching recordings:', error);
      }
    };

    fetchData();
  }, []);

  const playStopRecording = (url: string) => {
    if (audio && audio.src === url) {
      audio.pause();
      audio.currentTime = 0;
      setAudio(null);
    } else {
      const newAudio = new Audio(url);
      newAudio.play();
      setAudio(newAudio);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Aves en Guatemala</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {recordings.map((recording) => (
            <IonItem key={recording.id}>
              <IonThumbnail slot="start">
                {recording.osci?.small && <img src={recording.osci.small} alt="Waveform" />}
              </IonThumbnail>
              <IonLabel>
                <h2>{`${recording.gen} ${recording.sp}`}</h2>
                <p>{`Familia: ${recording.gen}`}</p>
                <p>{`Nombre: ${recording.en}`}</p>
                <p>{`Ubicación: ${recording.loc}`}</p>
                <p>{`Descubridor: ${recording.rec}`}</p>
                <p>{`Length: ${recording.length}, Time: ${recording.time}`}</p>
                <IonButton onClick={() => playStopRecording(recording.file)}>
                  <IonIcon name={audio && audio.src === recording.file ? 'stop' : 'play'} />
                  {audio && audio.src === recording.file ? 'Detener' : 'Reproducir'}
                </IonButton>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
