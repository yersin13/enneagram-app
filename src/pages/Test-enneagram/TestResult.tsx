import React, { useEffect, useState } from 'react';
import { IonSlides, IonSlide, IonContent, IonPage, IonItem, IonButton, IonToolbar, IonButtons, IonBackButton, IonTitle, IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { useAuth } from '../../auth';
import { firestore } from '../../firebase';
import { Entry, toEntry } from '../../models';
import { useParams } from 'react-router';


// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 0,
  speed: 400
};

interface RouteParams{
  id: string;
}

const TestResult: React.FC = () => {
  const {userId} =useAuth();
  const [entries,setEntries] =  useState<Entry[]>([]);
  useEffect(()=>{
   const entriesRef =  firestore.collection('users').doc(userId)
      .collection('Enneagram');
    return entriesRef.orderBy('date').limit(2)
    .onSnapshot(({docs}) => setEntries(docs.map(toEntry)));
  },[userId]);
  console.log(entries);

  return (    
  <IonPage>
    <IonContent className="ion-padding">
      <IonSlides pager={true} options={slideOpts}>
        <IonSlide className="intro-slide">
       
          <div>
     
            <div className="ion-padding">
              <h1>Thank you for tanking the test</h1>
              
            </div>
            <div className="ion-padding">
              <p>
               Your Enneatype is: 
              </p>
              {entries.map((entry) =>
     <h1>{entry.Enneatype}</h1>
        )}
              
              <p>Go home and check the update information we have for you</p>
            </div>
            <IonButton expand='block' routerLink="/my/home">
                Let's go Home
      </IonButton>
          </div>
          <br />
   
        </IonSlide >
        

   

          
      </IonSlides>
    </IonContent>
  </IonPage>
);
}

export default TestResult;