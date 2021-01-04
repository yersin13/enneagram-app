import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInfiniteScroll,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useAuth } from '../auth';
import { firestore } from '../firebase';
import { Entry, toEntry } from '../models';

interface RouteParams{
  id: string;
}


const Profile: React.FC = () => {

  
  const {userId} =useAuth();
  const history = useHistory();
  const { id } = useParams<RouteParams>();
 const [entry,setEntry]= useState<Entry>();
 const [profile, setProfile] = useState<Entry[]>([]);

// const id = "nkpWwO8I3lhhxeOiZyYt"
 
    
   useEffect(()=>{
    const entryRef = firestore.collection('Famous');
    entryRef.where('code', '==', "all").get()
    .then(({ docs }) => setProfile(docs.map(toEntry)));
     
   }, [])

const index = profile.findIndex(x => x.id === id);

// console.log(id)
//    console.log(profile)
//    console.log(index)

   const name = profile.map(({ name }) => name)[index]
   const type = profile.map(({ type }) => type)[index]
   const net = profile.map(({ net }) => net)[index]
   const link = profile.map(({ link }) => link)[index]
  return (
    <IonPage>
       
      <IonContent className="ion-padding">
      <IonHeader className="perfil-header" >

          <IonTitle className="perfil-title">
            <div className="perfil-container-top">
              <IonAvatar className="perfil-avatar" >
                <img className="home-avatar" src={link} alt="" />
              </IonAvatar>


              <h5 className="home-name">{name}</h5>
              <IonChip>
                <IonLabel color="primary">"Enneagram type {type}"</IonLabel>
              </IonChip>

            </div>

          </IonTitle>

        </IonHeader>
 
        <IonList>
          <IonItem>
            <IonGrid>

            </IonGrid>
          </IonItem>

      
            <IonGrid className="home-grid">
              <IonRow className="home-row-top no-padding" >
                <IonCol>
                  <IonCard className="home-card">

                    <div className="home-card-content">
                      <IonCardHeader className="home-card-header" >

                        <IonCardTitle color="light"> Enneagram {type} Description</IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent>
                        <p className="home-card-content-text">
                          {net}
                        </p>
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

export default Profile;

