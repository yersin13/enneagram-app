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
import { useAuth } from '../auth';
import { firestore } from '../firebase';
import { Entry, toEntry } from '../models';

const Profile: React.FC = () => {


  const { userId, email, name } = useAuth();
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

  // console.log(email)
  // console.log(number)
  // --------------------------------------->
  // -------------------------->


  useEffect(() => {

    const entriesRefEnneagram = firestore.collection('EnneagramDescription')
    entriesRefEnneagram.get()
      .then(({ docs }) => setEntry(docs.map(toEntry)));
  }, []);

  //   // ------------------------>

  const index = entry.findIndex(x => x.id === number);

  console.log(index)

  const title = entry.map(({ title }) => title)[index]
  const quote = entry.map(({ quote }) => quote)[index]
  const description = entry.map(({ description }) => description)[index]
  const numberType = entry.map(({ numberType }) => numberType)[index]
  const link = entry.map(({ link }) => link)[index]
  // const link = "https://images.pexels.com/photos/4423596/pexels-photo-4423596.jpeg?cs=srgb&dl=pexels-claudio-olivares-medina-4423596.jpg&fm=jpg"




  return (
    <IonPage>
       
      <IonContent className="ion-padding">
      <IonHeader className="prof-header" >
       
       <IonTitle className="prof-title">
       <div className="prof-container-top">
                       <IonAvatar className="prof-avatar" >
                         <img className="home-avatar" src={link} alt="" />
                       </IonAvatar>
 
 
                       <h2 className="home-name">{name}</h2>
                       <p className="home-email">{email}</p>
                      
                       <IonChip>
          <IonLabel color="success">{title} "{numberType}"</IonLabel>
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

                        <IonCardTitle color="light"> Enneagram {numberType} Description</IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent>
                        <p className="home-card-content-text">
                          {description}
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

