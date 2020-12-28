import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonPage,
  IonSlide,
  IonSlides,
} from '@ionic/react';
import React from 'react';

// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 0,
  speed: 400
};


const IntroTest: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonSlides pager={true} options={slideOpts}>
        <IonSlide className="intro-slide">

<div>
  <IonCard className="home-card">

    <div className="home-card-content">
      <IonCardHeader className="home-card-header" >

        <IonCardTitle color="light"> Enneagram Test (Riso-Hudson)</IonCardTitle>
      </IonCardHeader>
      <IonCardContent className="description-card-content">
        <div className="description-card-content-container">
          <p className="home-card-content-text">
          Read each of the following paragraphs carefully and select the one that you most identify with. 
          </p>
          <p className="home-card-content-text">

            It is really important that when you answer you do it honestly and trying to feel which text reflects your personality the most, even though not all the text resonates with you.
          </p>
        </div>
      </IonCardContent>
    </div>
  </IonCard>
</div>
<br />

</IonSlide >
<IonSlide className="intro-slide">

<div>
  <IonCard className="home-card">

    <div className="home-card-content">
      <IonCardHeader className="home-card-header" >

        <IonCardTitle color="light"> Enneagram Test (Riso-Hudson)</IonCardTitle>
      </IonCardHeader>
      <IonCardContent className="description-card-content">
        <div className="description-card-content-container">
          <p className="home-card-content-text">
          You can leave the test at any moment but if you do you will have to start again.
          </p>
          <br/>
          <div>  
   <IonButton className="dashboard-test-button" routerLink="/my/test" expand='block' >Let's Start</IonButton>
   </div>
        </div>
      </IonCardContent>
    </div>
  </IonCard>
</div>
<br />
</IonSlide >
         
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default IntroTest;
