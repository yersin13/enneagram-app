import React from 'react';
import { IonSlides, IonSlide, IonContent, IonPage, IonButton } from '@ionic/react';


// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 0,
  speed: 400
};

export const SlidesIntro: React.FC = () => (
  <IonPage>
    <IonContent className="ion-padding">
      <IonSlides pager={true} options={slideOpts}>
        <IonSlide className="intro-slide">
       
          <div>
     
            <div className="ion-padding">
              <h1>Welcome</h1>
              <img src="./assets/bg-card.jpg" alt="ss" />
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit natus soluta vitae quibusdam culpa, tenetur deleniti dicta mollitia perspiciatis quos doloremqu
              </p>
            </div>
          </div>
          <br />

        </IonSlide >
        <IonSlide className="intro-slide">
        <div>
 
            <div className="ion-padding">
              <h1>Almost there!</h1>
              <img src="./assets/bg-card.jpg" alt="ss" />
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit natus soluta vitae quibusdam culpa, tenetur deleniti dicta mollitia perspiciatis quos doloremqu
              </p>
            </div>
          </div>
          <br />
        </IonSlide>
        <IonSlide className="intro-slide">
          <div className="ion-padding">
            <div className="ion-padding">
              <h1>Thank you</h1>
              <img src="./assets/bg-card.jpg" alt="ss" />
            </div>
            <div className="ion-padding">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit natus soluta vitae quibusdam culpa, tenetur deleniti dicta mollitia perspiciatis quos doloremqu
      </p>
              <div className="ion-padding">

                <IonButton expand='block' routerLink="/my/dashboard">
                  Get Started
      </IonButton>

              </div>
            </div>

          </div>

        </IonSlide>
      </IonSlides>
    </IonContent>
  </IonPage>
);
