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
  } from "@ionic/react";
  import React, { useState } from "react";

  import { useForm } from "react-hook-form";

  import { object, string } from "yup";
import { useAuth } from "../../auth";
import { Redirect } from "react-router";
import { auth } from "../../firebase";
import { eye, eyeOff } from 'ionicons/icons'
import Input, { InputProps } from "../components/Input";
  
  const RegisterPage: React.FC = () => {
    const { loggedIn } = useAuth();
    const [status, setStatus] = useState({ loading: false, error: false });
    const [errorType, setErrorType] = useState('Opps!');
    const [passwordShown, setPasswordShown] = useState(false);
    const [iconEye, setIconEye] = useState(eye);

    const validationSchema = object().shape({
      email: string().required().email(),
      name: string().required().min(5).max(32),
      password: string().required().min(6),
    });
    const { control, handleSubmit, errors } = useForm({
      validationSchema,
    });
    
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
        if(passwordShown == true){
            setIconEye(eye)
        }else{
            setIconEye(eyeOff)
        }
      };


    const formFields: InputProps[] = [
      {
       
        name: "name",
        label: "Name",
      },
      {
        name: "email",
        component: <IonInput className="login-input"  type="email" />,
        label: "Email",
      },
      {
        name: "password",
        component: <IonInput  className="login-input" type={passwordShown ? "text" : "password"} clearOnEdit={false} />,
        label: "Password",
      },
    ];
  

    const registerUser = async (data: any) => {
        try {
          setStatus({ loading: true, error: false });
          const credential = await auth.createUserWithEmailAndPassword(data.email, data.password)
          .then((user)=>{
            if (user){
              user.user.updateProfile({
                displayName:data.name
              })
            }
          })
         console.log(credential)
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
             
              <form onSubmit={handleSubmit(registerUser)}>
              <IonList  lines="none">
                {formFields.map((field, index) => (
                  <Input {...field} control={control} key={index} errors={errors} />
                ))}
                <div>
                <IonButton  onClick={togglePasswordVisiblity}>Show password
                    <IonIcon  className="user-icon" icon={iconEye}>
                    </IonIcon>
                    </IonButton>
                </div>
                   
                    
              </IonList>
          
            <IonButton expand="block" type="submit" className="ion-margin-top">
                  Register
                </IonButton>
              </form>
           
              <IonButton expand='block' fill="clear" routerLink="/login">
                Already have an account?
        </IonButton>
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
  
  export default RegisterPage;