import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { chevronForward } from 'ionicons/icons'
import React, { useEffect, useState } from 'react';
import { useAuth } from '../auth';
import { firestore } from '../firebase';
import { Entry, toEntry  } from '../models';

const Dashboard: React.FC = () => {

  const { userId, email , name } = useAuth();
  const [entries, setEntries] = useState<Entry[]>([]);
  const [entry, setEntry] = useState<Entry[]>([]);
  const [refresh, setRefresh] = useState<Entry[]>();
  useEffect(() => {
  
    const entriesRef = firestore.collection('users').doc(userId)
      .collection('Enneagram');
    return entriesRef.orderBy('date', "desc").limit(1)
      .onSnapshot(({ docs }) => setEntries(docs.map(toEntry)));

  }, [userId]);

  



  const number = entries.map(({ Enneatype }) => Enneatype)[0]
if(number == null){
  return<IonPage>
    <IonHeader >
        <IonToolbar className="header">
          <IonTitle>Your Dashboard
          </IonTitle>
        </IonToolbar>
      </IonHeader>
    <IonContent>
    
        <div className="dashboard-grid-container  ">
          
          <IonGrid className="dashboard-grid">
            <IonRow className="dashboard-row-top" >
              <IonCol className="ion-padding" >
              <div className="ion-padding">
          <IonButton className="dashboard-test-button" routerLink="/my/intro-test" expand='block' >Take the Enneagram test</IonButton>
        </div>
                <div className="dashboard-card-container">
                  <IonCard routerLink="/my/DescriptionEnneagram" className="dashboard-card">
                    <div className="dashboard-card-content">
                      <IonCardHeader className="dashboard-card-header" >
                        <IonCardTitle color="light">Enneagram Description  <IonIcon icon={chevronForward}></IonIcon></IonCardTitle>
                      </IonCardHeader>
                    </div>
                  </IonCard>
                </div>
              </IonCol>
            </IonRow>
            </IonGrid>
            </div>
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
                        <IonCardTitle className="card-title" color="light"><h4>Enneagram Description</h4>  <IonIcon icon={chevronForward}></IonIcon></IonCardTitle>
                      </IonCardHeader>
                    </div>
                  </IonCard>
                </div>
              </IonCol>
            </IonRow>
            {/* -------------  */}
            <IonRow className="dashboard-row-bottom" >
              <IonCol size="6">
                <div className="dashboard-card-left1">
                  <IonCard className="dashboard-card">
                    <div className="dashboard-card-content">
                      <IonCardHeader className="dashboard-card-header" >
                        <IonCardTitle color="light">
                          {/* text */}
                        </IonCardTitle>
                      </IonCardHeader>
                    </div>
                  </IonCard>
                </div>
                <div className="dashboard-card-left2">
                  <IonCard  routerLink="/my/questions" className="dashboard-card">
                    <div className="dashboard-card-content">
                      <IonCardHeader className="dashboard-card-header" >
                        <IonCardTitle color="light"><h4>Questions and Answers</h4></IonCardTitle>
                      </IonCardHeader>
                    </div>
                  </IonCard>
                </div>
              </IonCol>
              <IonCol size="6">
                <div className="dashboard-card-right1">
                  <IonCard className="dashboard-card">
                    <div className="dashboard-card-content">
                      <IonCardHeader className="dashboard-card-header">

                        <IonCardTitle color="light"><h4>Tip of the Day</h4></IonCardTitle>
                      </IonCardHeader>

                    </div>
                  </IonCard>
                </div>
                <div className="dashboard-card-right2">
                  <IonCard className="dashboard-card">

                    <div className="dashboard-card-content">
                      <IonCardHeader className="dashboard-card-header" >

                        <IonCardTitle color="light">
                          {/* text */}
                           </IonCardTitle>
                      </IonCardHeader>

                    </div>
                  </IonCard>
                </div>


              </IonCol>

            </IonRow>
          </IonGrid>
        </div>


      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
