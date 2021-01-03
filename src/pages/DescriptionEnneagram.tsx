import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';


const DescriptionEnneagram: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="header">
        <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        <IonTitle>

          Description Enneagram
         
      
          </IonTitle>

        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <IonCard className="home-card">

<div className="home-card-content">
  <IonCardHeader className="home-card-header" >

    <IonCardTitle color="light"> <h4>Enneagram 4 Description</h4></IonCardTitle>
  </IonCardHeader>
  <IonCardContent className="description-card-content">
    <div className="description-card-content-container">
    <img src="../assets/simbol.gif" alt=""/>
    <p className="home-card-content-text">
    The Enneagram refers to the nine different types or styles, with each representing a worldview and archetype that resonates with the way people think, feel and act in relation to the world, others and themselves. It is much more than a personality profile that offers insight into core personality traits, as it delves deeper into the core motivations, defence mechanisms and fears that often lie in the unconscious layers of our personality structure. Your Enneagram core type is like a home base from which we make sense of individuation, integration and development. Other words used to describe the idea of ‘type’ include resonance, identification, lens, perspective or style.
    </p>
    </div>




  </IonCardContent>
</div>
</IonCard>
      </IonContent>
    </IonPage>
  );
};

export default DescriptionEnneagram;
