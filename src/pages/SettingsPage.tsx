import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToggle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import {auth} from '../firebase';

const SettingsPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {/* ///
      <IonList>
        <IonItem lines="full">
          <IonIcon slot="start" name="moon"></IonIcon>
          <IonLabel>
            Toggle Dark Theme
          </IonLabel>
          <IonToggle id="themeToggle" slot="end"></IonToggle>
        </IonItem>
      </IonList>
      /// */}
    <IonButton color='medium' expand="block" 
    onClick={() =>{ auth.signOut()
    }}>LOGOUT</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default SettingsPage;
