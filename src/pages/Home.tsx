import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToggle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import { auth } from '../firebase';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader >
        <IonToolbar className="header">
          <IonTitle>
          </IonTitle>

        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItem>
            <IonGrid>
              <IonRow>
                <div className="home-title-container">
                  <IonCol size="6" >
                    <div className="home-col-title-left">
                      <IonAvatar  >
                        <img className="home-avatar" src="../assets/animals/cat.png" alt="" />
                      </IonAvatar>
                      <div>

                        <h5 className="home-name"> Yersin Hernandez</h5>
                        <p className="home-email">yersineduard@gmail.com</p>

                      </div>
                    </div>

                  </IonCol>
                  <IonCol size="6" className="home-col-title-right">
                    <IonCard className="home-title-card">

                      <div className="home-title-content">
                        <IonCardHeader className="home-card-header" >

                          <IonCardTitle className="home-title-card-title" color="light">
                            <h5 className="home-title-card-title-title">The Creative</h5>
                          </IonCardTitle>
                          <IonCardContent className="home-title-card-number">
                            <h1 className="home-title-card-number-number">4</h1>
                          </IonCardContent>
                        </IonCardHeader>

                      </div>
                    </IonCard>
                  </IonCol>
                </div>
              </IonRow>
            </IonGrid>
          </IonItem>

      
            <IonGrid className="home-grid ion-padding">
              <IonRow className="home-row-top no-padding" >
                <IonCol>
                  <IonCard className="home-card">

                    <div className="home-card-content">
                      <IonCardHeader className="home-card-header" >

                        <IonCardTitle color="light"> Enneagram 4 Description</IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent>
                        <p className="home-card-content-text">People with an Enneagram Type 4
                        personality tend to be creative,
                        sensitive, and expressive in their behavior.
                        They like to be unique and seek to find their own
                        identity. Though they desire relationships,
                        they may seem distant and reserved, especially in
                        group settings.
                        </p>
                      </IonCardContent>
                    </div>
                  </IonCard>
                </IonCol>
              </IonRow>

              <IonRow className="home-row-top " >
                <IonCol>
                  <IonCard className="home-card">
                    <div className=" home-card-img-container">
                    </div>
                    <div className="home-card-content">
                      <IonCardHeader className="home-card-header" >

                        <IonCardTitle color="light">Today's quote from your enneagram type</IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent>
                      <p className="home-card-content-text">
                      “People say that I make strange choices, but they’re not strange for me. My sickness is that I’m fascinated by human behavior, by what’s underneath the surface, by the worlds inside people.” – Johnny Depp
                        </p>
                      </IonCardContent>
                    </div>
                  </IonCard>
                </IonCol>
              </IonRow>

              <IonRow className="home-row-top" >
                <IonCol>
                  <IonCard className="home-card">
                    <div className=" home-card-img-container">
                    </div>
                    <div className="home-card-content">
                      <IonCardHeader className="home-card-header" >

                        <IonCardTitle color="light">Millionaires with your same enneagram type</IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent className="personalities-container">
                      <div className="personalitie-avatar-container">
                        <div className="personalitie1">
                        <IonAvatar slot="start">
                          <img src="../assets/personalities/deep.jpg" alt=""/>
                        </IonAvatar>
                        <IonLabel><h2>Johnny Deep</h2></IonLabel>
                        </div>
                        <div className="personalitie1">
                        <IonAvatar>
                          <img src="../assets/personalities/marloon.jpg" alt=""/>
                        </IonAvatar>
                        <IonLabel><h2>Marloon Bradon</h2></IonLabel>
                        </div>
                        <div className="personalitie1">
                        <IonAvatar>
                          <img src="../assets/personalities/bob.jpg" alt=""/>
                        </IonAvatar>
                        <IonLabel className="personalitie-name"><h2>Bob Dylan</h2></IonLabel>
                        </div>
                      </div>
                      
                      </IonCardContent>
                    </div>
                  </IonCard>
                </IonCol>
              </IonRow>

              <IonRow className="home-row-top" >
                <IonCol>
                  <IonCard className="home-card">
                    <div className=" home-card-img-container">
                    </div>
                    <div className="home-card-content">
                      <IonCardHeader className="home-card-header" >

                        <IonCardTitle color="light">take advance test</IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent>
                        <h1>4</h1>
                      </IonCardContent>
                    </div>
                  </IonCard>
                </IonCol>
              </IonRow>


              <IonRow className="home-row-top" >
                <IonCol>
                  <IonCard className="home-card">
                    <div className=" home-card-img-container">
                    </div>
                    <div className="home-card-content">
                      <IonCardHeader className="home-card-header" >

                        <IonCardTitle color="light">How to deal with fear</IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent>
                        <h1>4</h1>
                      </IonCardContent>
                    </div>
                  </IonCard>
                </IonCol>
              </IonRow>
            </IonGrid>

        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Home;
