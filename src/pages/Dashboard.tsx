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
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { chevronForward, flash, flashlight, flashOutline, glasses, glassesOutline, headsetOutline, heart, heartOutline } from 'ionicons/icons'
import React, { useEffect, useState } from 'react';
import { useAuth } from '../auth';
import { firestore } from '../firebase';
import { Entry, toEntry } from '../models';

const Dashboard: React.FC = () => {

  const { userId } = useAuth();
  const [entries, setEntries] = useState<Entry[]>([]);
  const [profile, setProfile] = useState<Entry[]>([]);

  useEffect(() => {

    const entriesRef = firestore.collection('users').doc(userId)
      .collection('Enneagram');
    return entriesRef.orderBy('date', "desc").limit(1)
      .onSnapshot(({ docs }) => setEntries(docs.map(toEntry)));

  }, [userId]);


  const index = Math.round(Math.random() * 53);

  useEffect(() => {
    const refProfile = firestore.collection('Famous')
    refProfile.get()
      .then(({ docs }) => setProfile(docs.map(toEntry)));
  }, [])

  console.log(index)

  const number = entries.map(({ Enneatype }) => Enneatype)[0]
// const number = null
  const TodayQuote = profile.map(({ quote1 }) => quote1)[index]
  const autor = profile.map(({ name }) => name)[index]
  const type = profile.map(({ type }) => type)[index]

  if (number == null) {
    return <IonPage>
     
      <IonContent className="dashboard-content-preview">
      <IonRow className="home-row-top no-padding" >
              <IonCol>
                <IonCard className="dashboard-card-preview">

               
                    <div className="home-card-title-header">
                      <IonCardHeader className="dashboard-cardheader-preview" >

                      <p className="preview-text">What type of Millionaire are you?</p>
                      <div>
          <IonButton className="dashboard-test-button" routerLink="/my/intro-test" expand='block' >Take the Enneagram test</IonButton>
        </div>
                      </IonCardHeader>
                      
                    </div>

                  
                </IonCard>
              </IonCol>
            </IonRow>
      </IonContent>
    </IonPage>
  }
  return (
    <IonPage >

      <IonHeader >
        <IonToolbar className="header">
          <IonTitle>Your Dashboard
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding dashboard-content">
        <div>
          <IonButton className="dashboard-test-button" routerLink="/my/intro-test" expand='block' >Take the Enneagram test</IonButton>
        </div>
        <div className="dashboard-grid-container ">
          <IonGrid className="dashboard-grid">
            <IonRow className="dashboard-row-top" >
              <IonCol>
                <div className="dashboard-card-container">
                  <IonCard routerLink="/my/DescriptionEnneagram" className="dashboard-card">
                    <div className="dashboard-card-content">
                      <IonCardHeader className="dashboard-card-header" >
                        <IonCardTitle className="card-title" color="light"><h4>Enneagram Description</h4>  <IonIcon  icon={chevronForward}></IonIcon></IonCardTitle>
                      </IonCardHeader>
                    </div>
                  </IonCard>
                </div>
              </IonCol>
            </IonRow>

            <IonRow className="dashboard-row-top" >
              <IonCol>
                <div className="triad-card-container">
                  <IonCard routerLink="/my/Thegut" className="dashboard-card">
                    <div className="triad-card-content">
                      <IonCardHeader className="dashboard-card-header" >
                        <IonCardTitle className="card-title" color="light"><IonIcon color="success" icon={flash}> </IonIcon><h4>&nbsp; The Gut</h4>  </IonCardTitle>
                      </IonCardHeader>
                    </div>
                  </IonCard>
                </div>
              </IonCol>
            </IonRow>
            <IonRow className="dashboard-row-top" >
              <IonCol>
                <div className="triad-card-container">
                  <IonCard routerLink="/my/TheHeart" className="dashboard-card">
                    <div className="triad-card-content">
                      <IonCardHeader className="dashboard-card-header" >
                        <IonCardTitle className="card-title" color="light"><IonIcon color="danger" icon={heart}> </IonIcon><h4>&nbsp; The Heart</h4>  </IonCardTitle>
                      </IonCardHeader>
                    </div>
                  </IonCard>
                </div>
              </IonCol>
            </IonRow>
            <IonRow className="dashboard-row-top" >
              <IonCol>
                <div className="dashboard-card-container">
                  <IonCard routerLink="/my/Thehead" className="dashboard-card">
                    <div className="triad-card-content">
                      <IonCardHeader className="dashboard-card-header" >
                        <IonCardTitle className="card-title" color="light"><IonIcon color="secondary" icon={glasses}> </IonIcon><h4>&nbsp; The Head</h4>  </IonCardTitle>
                      </IonCardHeader>
                    </div>
                  </IonCard>
                </div>
              </IonCol>
            </IonRow>

            <IonRow className="dashboard-row-top" >
             
             
              {/* <IonList>
              <IonCard className="dashboard-card-personalities">

<div className="dashboard-container-personalities">

              {profile.map((prof) =>
                          // <div className="personalities-small-container">

                         
                            <IonItem className="personalitie-item-link" lines="none" button routerLink={`/my/personalities/${prof.id}`}  >
                              <div className="personalities-item-div">

                            
                              <div className="personalitie1" >
                                 
                                <IonAvatar className="personalitie-avatar" slot="start">
                                  <img src={prof.link} alt="" />
                                </IonAvatar>
                                </div>

                                <div className="personalitie-name-container" >
                                <p className="name-personalities" >{prof.name}</p>
                                </div>
                                </div>
                               

                              
                           </IonItem>
                          //  </div>
                          )}
                          </div>
                          </IonCard>
              </IonList> */}
            </IonRow>
            {/* -------------  */}
           
          </IonGrid>
        </div>


      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
