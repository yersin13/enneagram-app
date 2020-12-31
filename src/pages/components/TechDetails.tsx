import React from 'react';

import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonIcon } from '@ionic/react';



interface TechDetailProps {
    question: string;
    answer: string;
    icon: string;
    color: string;
  }


const TechDetail: React.FC<TechDetailProps> = ({ question, answer, icon, color}) => {

  return (
    <>
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/my/home"></IonBackButton>
          </IonButtons>
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <h3>{question}</h3>
        {/* <IonIcon size="large" icon={icon} style={{ color: `${color}` }} /> */}
        <p>{answer}</p>
      </IonContent>
    </>
  );
};

export default TechDetail