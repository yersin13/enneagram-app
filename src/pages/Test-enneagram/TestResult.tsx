import React, { useEffect, useState } from 'react';
import { IonSlides, IonSlide, IonContent, IonPage, IonItem, IonButton, IonToolbar, IonButtons, IonBackButton, IonTitle, IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { useAuth } from '../../auth';
import { firestore } from '../../firebase';
import { Entry,  toEntry } from '../../models';
import { useParams } from 'react-router';
import { array } from 'yup/lib/locale';


// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 0,
  speed: 400
};

interface RouteParams {
  id: string;
    Enneatype:string;
    PrimeraRespuesta: string;
    SegundaRespuesta: string;
    date:string;
    description:string;
    quote: string;
    title:string;
}



const TestResult: React.FC = () => {
  const { userId } = useAuth();
  const [entries, setEntries] = useState<Entry[]>([]);
  const [entry, setEntry] = useState<Entry[]>([]);
  const [final, setFinal] = useState<Entry[]>();
  const [idea, setIdea] =useState();

  useEffect(() => {
    const entriesRef = firestore.collection('users').doc(userId)
      .collection('Enneagram');
    return entriesRef.orderBy('date', "desc").limit(1)
      .onSnapshot(({ docs }) => setEntries(docs.map(toEntry)));

  }, [userId]);
  const number = entries.map(({ Enneatype }) => Enneatype)[0]
  console.log(entries)
  // console.log(number)
  // --------------------------------------->
  // -------------------------->


  useEffect(() => {
    const entriesRefEnneagram = firestore.collection('EnneagramDescription')
  
      entriesRefEnneagram.get()
      .then(({ docs }) => setEntry(docs.map(toEntry)));
  }, []);
  console.log(entry)
//   // ------------------------>



  function search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].id === nameKey) {
          
            return myArray[i]
        }
    }
}
  useEffect(() => {
    setFinal(search(number,entry))
  }, [number, entry]);
  const title = entry.map(({title}) => title)[number]
  const quote = entry.map(({quote}) => quote)[number]
  const description = entry.map(({description}) => description)[number]
 
console.log(title)



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
                
                  <h1>{title}</h1>
                  <h1>{quote}</h1>
                  <br/>
                  <h1>{description}</h1>

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