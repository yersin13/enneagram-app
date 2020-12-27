import React, { useEffect, useState } from 'react';
import { IonSlides, IonSlide, IonContent, IonPage, IonItem, IonButton, IonToolbar, IonButtons, IonBackButton, IonTitle, IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { useAuth } from '../../auth';
import { firestore } from '../../firebase';
import { Entry,  toEntry } from '../../models';
import { useParams } from 'react-router';


// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 0,
  speed: 400
};

interface RouteParams {
  id: string;
}

const TestResult: React.FC = () => {
  const { userId } = useAuth();
  const [entries, setEntries] = useState<Entry[]>([]);
  const [entry, setEntry] = useState<Entry[]>([]);
  const [final, setFinal] = useState();
  const [idea, setIdea] =useState();

  useEffect(() => {
    const entriesRef = firestore.collection('users').doc(userId)
      .collection('Enneagram');
    return entriesRef.orderBy('date', "desc").limit(1)
      .onSnapshot(({ docs }) => setEntries(docs.map(toEntry)));

  }, [userId]);
  const number = entries.map(({ Enneatype }) => Enneatype)[0]
  console.log(entries)
  console.log(number)
  // --------------------------------------->
  // -------------------------->


  useEffect(() => {
    const entriesRefEnneagram = firestore.collection('EnneagramDescription')
    return entriesRefEnneagram.orderBy('quote').limit(9)
      .onSnapshot(({ docs }) => setEntry(docs.map(toEntry)));

  }, [number]);
  // console.log(entry)
  // ------------------------>
  function search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].id === nameKey) {
            return Object.keys(myArray[i]);
        }
    }
}
  useEffect(() => {
   setFinal(search(number,entry))
  }, [number, entry]);

console.log(Object.keys(final))










  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonSlides pager={true} options={slideOpts}>
          <IonSlide className="intro-slide">

            <div>

              <div className="ion-padding">
                <h1>Thank you for taking the test</h1>

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