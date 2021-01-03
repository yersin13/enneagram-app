import {
  IonContent,
  IonPage,
  IonText,
  IonInput,
  IonButton,
  IonCheckbox,
  IonItem,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonList,
  IonToast,
  IonLoading,
  IonIcon,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonHeader,
} from "@ionic/react";
import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import { object, ref, string } from "yup";

import { eye, eyeOff, person } from 'ionicons/icons'
import { useAuth } from "../auth";
import Input, { InputProps } from "./components/Input";
import { auth } from "../firebase";
import firebase from "firebase";

const EmailChange: React.FC = () => {
  const history = useHistory();
  const { name } = useAuth();
  const [status, setStatus] = useState({ loading: false, error: false });
  const [errorType, setErrorType] = useState('Opps!');


  const validationSchema = object().shape({
    name: string().required().min(5),
    
  });
  const { control, handleSubmit, errors } = useForm({
    validationSchema,
  });



  const formFields: InputProps[] = [
    {
      name: "name",
      component: <IonInput className="login-input"  type="text" />,
      label: "New name",
    },
  ];


  const registerUser = async (data: any) => {   
      
  var user = firebase.auth().currentUser;  
      
        const credential = await user.updateProfile({
          displayName: data.name
         
        }).then(function() {
          console.log('name changed')
    // remember to set this reload in real app
          // window.location.reload()
          history.goBack()
        }).catch(function(error) {
          console.log('something goes wrong')
        });
      
    };
  



  return (
      <IonPage>
        <IonHeader>
        <IonToolbar>
        <IonButton slot="start">
            <IonBackButton defaultHref="/my/settings"></IonBackButton>
          </IonButton>
       
        </IonToolbar>
        </IonHeader>
        
      <div className="ion-padding">

      </div>

      <IonContent className="ion-padding login-content" >
        
        <IonGrid >
          
          <IonRow className="login-row">
          <IonCol className="ion-align-self-center">
            <div>
            <IonTitle>Changing Name</IonTitle>
            </div>
<br/>
          <div>
          <IonItem lines="none">
                  <IonIcon  className="user-icon" icon={person}>
                  </IonIcon>
                  <IonLabel>{name}</IonLabel>
                  </IonItem>
                
              </div>
            <form onSubmit={handleSubmit(registerUser)}>
            <IonList  lines="none">
              {formFields.map((field, index) => (
                <Input {...field} control={control} key={index} errors={errors} />
              ))}
            
                 
                  
            </IonList>
        
          <IonButton expand="block" type="submit" className="ion-margin-top">
                Save
              </IonButton>
            </form>
         
         
            <IonLoading isOpen={status.loading} />
            </IonCol>
            {status.error &&
              <IonToast color="danger" duration={2000} isOpen={true} message={errorType} />
            }
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default EmailChange;