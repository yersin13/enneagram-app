import {
  IonAlert,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToast,
  IonToggle,
  IonToolbar,
} from '@ionic/react';
import firebase from 'firebase';
import { fingerPrintOutline, atOutline,logOutOutline, notifications, person } from 'ionicons/icons'
import React, { useEffect, useState } from 'react';
import { useAuth } from '../auth';
import {auth} from '../firebase';

const SettingsPage: React.FC = () => {
  const { userId, email, name } = useAuth();
  const [Message, setMessage] =useState("");
  const [buttomStatus, setButtomStatus] = useState(true);
  const [showAlert1, setShowAlert1] = useState(false);


  const handleChangePassword = () => {
    var auth = firebase.auth();
    var emailAddress = email;
  
     auth.sendPasswordResetEmail(emailAddress).then(function() {
        // Email sent.
       
        setMessage("Message sent to " + `${emailAddress}`)
        setShowAlert1(true)
        setButtomStatus(true)
       
      })
    
  };

  useEffect(() => {
    // window.location.reload()
    setButtomStatus(false)
   
  }, []);

  return (
    <IonPage className="ion-padding">
      <IonHeader>
        <IonToolbar>
        <IonLabel className="settings-title">Settings</IonLabel>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">

      <div>      
        <br/>
      <IonList>
      <IonItem lines="none" className="settings-item">
          <IonIcon slot="start" icon={notifications}></IonIcon>
          <IonLabel className="settings-text">
        Notifications
          </IonLabel>
          <IonToggle slot="end" name="blueberry" checked></IonToggle>
        </IonItem>
      <br/>
    
      </IonList>
      </div>
        <div>
        {/* <IonTitle><h1>Settings</h1></IonTitle> */}
       
      
        <br/>
        <IonLabel className="settings-text-title">Personal Info</IonLabel>
      <IonList>
      <IonItem lines="none" className="settings-item">
          <IonIcon slot="start" icon={atOutline}></IonIcon>
          <IonLabel className="settings-text">
         {email}
          </IonLabel>
        
        </IonItem>
      <br/>
      <IonItem lines="none" className="settings-item">
          <IonIcon slot="start" icon={person}></IonIcon>
          <IonLabel className="settings-text">
        {name}
          </IonLabel>
          <IonButton routerLink="/my/name-change">
            Change
          </IonButton>
        </IonItem>
      <br/>
       
        <IonItem lines="none" className="settings-item">
          <IonIcon slot="start"  icon={fingerPrintOutline}></IonIcon>
          <IonLabel className="settings-text">
            Password
          </IonLabel>
          <IonButton onClick={handleChangePassword} disabled={buttomStatus} >
            Change
          </IonButton>
          <IonAlert
          isOpen={showAlert1}
          onDidDismiss={() => setShowAlert1(false)}
          cssClass='my-custom-class'
          header={'Password change request'}
          message={Message}
          buttons={['OK']}
        />
        </IonItem>
      </IonList>
      </div>
{/* ------------------ */}
<br/>
<br/>
<br/>
      <div>

      <IonList>
        <IonItem lines="none" className="settings-item"   onClick={() =>{ auth.signOut()
    }}>
          <IonIcon slot="start" icon={logOutOutline}></IonIcon>
          <IonLabel className="settings-text" >
            Log Out
          </IonLabel>
        </IonItem>
      
      </IonList>
      </div>
  
      </IonContent>
    </IonPage>
  );
};

export default SettingsPage;
