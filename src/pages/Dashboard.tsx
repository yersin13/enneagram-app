import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { body, pin, airplane, cafe, moon, arrowForward,chevronForward } from 'ionicons/icons'
import React, { useEffect, useState } from 'react';

const Dashboard: React.FC = () => {


  return (
    <IonPage >

      <IonHeader >
        <IonToolbar className="header">
          <IonTitle>Your Dashboard
          </IonTitle>

        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding dashboard-content">
        <div className="dashboard-grid-container ">
        <IonGrid className="dashboard-grid">
            <IonRow className="dashboard-row-top" >
              <IonCol>
                <div  className="dashboard-card-container">
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
            
            {/* -------------  */}
            <IonRow className="dashboard-row-bottom" >
              <IonCol size="6">
                <div className="dashboard-card-left1">
                  <IonCard className="dashboard-card">
                  
                    <div className="dashboard-card-content">
                      <IonCardHeader className="dashboard-card-header" >

                        <IonCardTitle color="light"></IonCardTitle>
                      </IonCardHeader>
                     
                    </div>
                  </IonCard>
                </div>

                <div className="dashboard-card-left2">
                  <IonCard className="dashboard-card">
                   
                    <div className="dashboard-card-content">
                      <IonCardHeader className="dashboard-card-header" >

                        <IonCardTitle color="light">Questions and Answers</IonCardTitle>
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

                        <IonCardTitle color="light">Tip of the Day</IonCardTitle>
                      </IonCardHeader>
                      
                    </div>
                  </IonCard>
                </div>
                <div className="dashboard-card-right2">
                  <IonCard className="dashboard-card">
                  
                    <div className="dashboard-card-content">
                      <IonCardHeader className="dashboard-card-header" >

                        <IonCardTitle color="light">Enneagra </IonCardTitle>
                      </IonCardHeader>
                     
                    </div>
                  </IonCard>
                </div>
 
               
              </IonCol>
  
            </IonRow>
          </IonGrid>
        </div>
  
          <div>  
   <IonButton className="dashboard-test-button" routerLink="/my/intro-test" expand='block' >Take the test</IonButton>
   </div>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
