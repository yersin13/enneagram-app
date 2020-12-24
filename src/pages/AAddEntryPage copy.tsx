import React, { useEffect, useRef, useState } from "react";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonDatetime,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTextarea,
  IonTitle,
  IonToast,
  IonToolbar,
  isPlatform,
} from '@ionic/react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from 'react-router';
import { useAuth } from '../auth';
import { firestore, storage } from '../firebase';
import { Entry } from "../models";
import {CameraResultType, CameraSource, Plugins} from '@capacitor/core';





// interface IFormInputs {
//   title: string;
//   description: string;
// }
const NovaEntryPage: React.FC = () => {
  const { userId } = useAuth();
  const history = useHistory();
  const [date, setDate] = useState('');
  const [pictureUrl, setPictureUrl] = useState('/assets/placeholder.png');
  const fileInputRef = useRef<HTMLInputElement>();
  // const [buttomStatus, setButtomStatus] = useState(false);
  const [title, setTitle] = useState('');

  const SignupSchema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
    // pictureUrl: yup.string().required(),
    date: yup.string().defined().required(),


  });

  const { register, handleSubmit, errors } = useForm<Entry>({
    resolver: yupResolver(SignupSchema)
  });

  const { Camera } = Plugins;

async function savePicture(blobUrl, userId) {
 const pictureRef = storage.ref(`/users/${userId}/pictures/${Date.now()}`);
 const response = await fetch(blobUrl);
 const blob = await response.blob();
 const snapshot = await pictureRef.put(blob);
 const url = await snapshot.ref.getDownloadURL();
console.log(url);
return url;
}

  //this code is to clean memory link created by selected images before upload
  useEffect(() => ()=> {
    if (pictureUrl.startsWith('blob:')){
      URL.revokeObjectURL(pictureUrl);
      // console.log('revoke Url:', pictureUrl);
    }
  },[pictureUrl]);

  const handleFileChange =(event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files.length > 0){
      const file = event.target.files.item(0);
      const pictureUrl = URL.createObjectURL(file);
      // console.log('create Url:', pictureUrl);
      setPictureUrl(pictureUrl);
    }
  }

const handlePictureClick = async () =>{
  if(isPlatform('capacitor')){
    try{
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Prompt,
        width:600,
      })
      setPictureUrl(photo.webPath);
    } catch (error){
      console.log('camera error', error);
    }
  } else{
  fileInputRef.current.click();
  }

};


  const onSubmit = async (data: Entry) => {
    console.log(data.title);
    const entriesRef = firestore.collection('users').doc(userId)
      .collection('entries');
      const entryData ={ date, pictureUrl};
    // const entryData = {data.title, data.description};
    if(!pictureUrl.startsWith('/assets')){
      entryData.pictureUrl = await savePicture(pictureUrl, userId);
    }
    const entryRef = await entriesRef.add(entryData);
    console.log('saved', entryRef.id);

    history.goBack();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Add Entry</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <form onSubmit={handleSubmit(onSubmit)}>
            <IonItem>
              <IonLabel position="stacked">Day</IonLabel>
              <p>{Date.now()}</p>
            </IonItem>
            <IonItem>
            <IonLabel position="stacked">title</IonLabel>
              <IonInput type="text" name="title" ref={register} />
            {errors.title && <p>{errors.title.message}</p>}
          </IonItem>
            <IonItem>
              <IonLabel position="stacked">Picture</IonLabel><br />
              <input type="file" accept="image/*" hidden ref={fileInputRef}
                onChange={handleFileChange}
              />
              <img src={pictureUrl} alt="" style={{ cursor: 'pointer' }}
                onClick={handlePictureClick}
              />
              {errors.pictureUrl && <p>{errors.pictureUrl.message}</p>}
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">description</IonLabel>
              <IonInput type="text" name="description" ref={register} />
              {errors.description && <p>{errors.description.message}</p>}
            </IonItem>
            <IonButton expand="block" type="submit">Save</IonButton>
          </form>
        </IonList>
      </IonContent>
    </IonPage>
  );

}
export default NovaEntryPage;