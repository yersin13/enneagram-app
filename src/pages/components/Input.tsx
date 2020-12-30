import React, { FC } from "react";
import { IonItem, IonLabel, IonInput, IonText, IonToast } from "@ionic/react";
import {
  Controller,
  Control,
  NestDataObject,
  FieldError,
} from "react-hook-form";

export interface InputProps {
  name: string;
  control?: Control;
  label?: string;
  component?: JSX.Element;
  errors?: NestDataObject<Record<string, any>, FieldError>;
}

const Input: FC<InputProps> = ({ name, control, component, label, errors }) => {
  return (
    <>
      <IonItem className="login-item" >
        {label && <IonLabel >{label}</IonLabel>}
        <div className="input-container">
        <Controller
          as={
            component ?? (
                
              <IonInput
              className="login-input" 
                aria-invalid={errors && errors[name] ? "true" : "false"}
                aria-describedby={`${name}Error`}
              />
            )
          }
          name={name}
          control={control}
          onChangeName="onIonChange"
        />
        </div>
      
      </IonItem>
      {errors && errors[name] && (
        <IonText color="danger" className="ion-padding-start">
          <small>
            <span role="alert" id={`${name}Error`}>
              {errors[name].message}
            </span>
          </small>
        </IonText>
      )}
        
    </>
  );
};

export default Input;