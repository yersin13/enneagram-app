import React, { useEffect, useState } from 'react';
import { IonSlides, IonSlide, IonContent, IonPage, IonButton, IonAvatar, IonLabel, IonChip, IonItem, } from '@ionic/react';
import { useAuth } from '../../auth';
import { firestore } from '../../firebase';
import { Entry, toEntry } from '../../models';



// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 0,
  speed: 400
};



const TestResult: React.FC = () => {
  const { userId, name } = useAuth();
  const [entries, setEntries] = useState<Entry[]>([]);
  const [entry, setEntry] = useState<Entry[]>([]);


  useEffect(() => {
    // if(name == null){
    //   window.location.reload()
    // }
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
  console.log(entry);
  //   // ------------------------>


  // look in the array for a match and return the index then use the index to extrac elements
  const index = entry.findIndex(x => x.id === number);

  console.log(index)
  const title = entry.map(({ title }) => title)[index]
  const link = entry.map(({ link }) => link)[index]


  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonSlides pager={true} options={slideOpts}>
          <IonSlide className="intro-slide">

            <div>

             
              <div className="ion-padding">
                <p>
                  Your Enneatype is:
              </p>
           
                <h1>"{title}"</h1>
                {entries.map((entry) =>
                  <h1>{entry.Enneatype}</h1>
                )}
                
                <div className="perfil-container-top">
                  <IonLabel>This avatar animal  
                    represent the most the Qualities of your enneagram type</IonLabel>
                    <br/>
                  <IonAvatar className="perfil-avatar" >
                    <img className="home-avatar" src={link} alt="" />
                    {/* <p>{name}</p> */}
                  </IonAvatar>    
                </div>

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