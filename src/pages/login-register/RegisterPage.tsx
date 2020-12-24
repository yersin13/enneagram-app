import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonLoading,
  IonPage,
  IonRow,
  IonTitle,
  IonToast,
  IonToolbar,
} from '@ionic/react';
import { lockOpenOutline, person } from 'ionicons/icons';
import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { useAuth } from '../../auth';
import { auth } from '../../firebase';




const RegisterPage: React.FC = () => {
  const { loggedIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState({ loading: false, error: false });
  const [errorType, setErrorType] = useState('Opps!');


  const handleRegister = async () => {
    try {
      setStatus({ loading: true, error: false });
      const credential = await auth.createUserWithEmailAndPassword(email, password);
      console.log('credential:', credential);
    } catch (error) {
      setStatus({ loading: false, error: true });
      setErrorType(error.message)
      console.log('error', error.message);
    }
  };

  if (loggedIn) {
    return <Redirect to="intro" />
  }
  return (
    <IonPage>
      <div className="login">

      </div>

      <IonContent className="ion-padding login-content" >
        <IonGrid >
          <IonRow className="login-row">
          <IonCol className="ion-align-self-center">
            <IonList className="login-container"  lines="none">
            <IonItem className="login-item"><div className="login-header"><h1>Sign Up</h1></div></IonItem>
            <IonItem className="login-item" >
                  <img className="logo" src="/assets/icon/logo.png" alt="" />
                </IonItem>
            </IonList>
            <IonList  lines="none">
            
            <IonItem className="login-item"  >
                <div className="icon-container">
                <IonIcon className="user-icon" icon={person}></IonIcon>
                </div>
                <div className="input-container">
                  <IonInput placeholder="Email" className="login-input" type="email" value={email}
                    onIonChange={(event) => setEmail(event.detail.value)}>
                    </IonInput>
                    </div>
                </IonItem>
                <IonItem className="login-item"  >
                  <div className="icon-container">
                    <IonIcon className="user-icon" icon={lockOpenOutline}></IonIcon>
                  </div>
              
              
                  <div className="input-container">
                    <IonInput placeholder="Password" className="login-input" type="password" value={password}
                      onIonChange={(event) => setPassword(event.detail.value)}>
                    </IonInput>
                  </div>


                </IonItem>
            </IonList>
            {status.error &&
              <IonToast color="danger" duration={2000} isOpen={true} message={errorType} />
            }
            <IonButton expand='block' onClick={handleRegister}>
              Create Account
      </IonButton>
            <IonButton expand='block' fill="clear" routerLink="/login">
              Already have an account?
      </IonButton>
            <IonLoading isOpen={status.loading} />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default RegisterPage;
