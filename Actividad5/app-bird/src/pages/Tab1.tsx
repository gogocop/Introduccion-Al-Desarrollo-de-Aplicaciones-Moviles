// Tab1.tsx
import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonButton
} from '@ionic/react';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>INICIO</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonLabel style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1 style={{ marginBottom: '2rem' }}>Bienvenido a mi aplicación</h1>
          <p style={{ marginBottom: '1rem', fontSize: '1rem' }}>Manuel Enrique Rodriguez-Villacorta</p>
          <p style={{ marginBottom: '2rem' }}>Carne 22006988</p>
          <IonButton routerLink="/tab2" size="small" style={{ width: 'auto' }}>
            Cargar
          </IonButton>
        </IonLabel>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
