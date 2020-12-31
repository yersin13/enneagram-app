import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonIcon, IonLabel } from '@ionic/react';

import React, { useEffect, useState } from 'react';

import { IonReactRouter } from '@ionic/react-router';
import IonReactNav from './components/IonReactNav';
import TechDetail from './components/TechDetails';
import { useAuth } from '../auth';
import { Entry, toEntry } from '../models';
import { firestore } from '../firebase';
import techs from '../techs';

const Home: React.FC = () => {


  const { userId, email, name } = useAuth();
  const [entries, setEntries] = useState<Entry[]>([]);
  const [entry, setEntry] = useState<Entry[]>([]);
  const [refresh, setRefresh] = useState<Entry[]>();
  const [final, setFinal] = useState<Entry[]>();
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
//   function search(nameKey, myArray){
//     for (var i=0; i < myArray.length; i++) {
       
//             return myArray[i]
        
//     }
// }
//   useEffect(() => {
//     setFinal(search(number,entry))
//   }, []);

// const index = entry.findIndex(x => x.id === number);

//   useEffect(() => {

//     const entriesRefEnneagram = firestore.collection('EnneagramDescription')
//     entriesRefEnneagram.get()
//       .then(({ docs }) => setEntry(docs.map(toEntry)));
//   }, []);

 
  const [tech, setTech] = useState(techs[0])
  console.log(tech)

  return (
    <IonPage className="ion-padding">
  <IonReactRouter>
        <IonReactNav detail={() => <TechDetail {...tech} />}>
          <IonHeader>
            <IonToolbar>
              <IonTitle></IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
            <IonHeader collapse="condense">
              <IonToolbar>
                <IonTitle size="large">Nav</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonList>
              <div className="ion-padding">
              <h1>Q/A</h1>
              </div>
              
              {techs.map((tech, i) => {
                return (
                  <IonItem button className="ion-react-nav-detail-btn" key={i} onClick={() => setTech(techs[i])}>
                    <IonIcon slot="start" icon={tech.icon} color="primary"/>
                    <IonLabel>
                      <h3>{tech.question}</h3>
                      {/* <h3>{tech.description}</h3> */}
                    </IonLabel>
                  </IonItem>
                )
              })}
            </IonList>
          </IonContent>
          </IonReactNav>
      </IonReactRouter>
    </IonPage>
  );
};

export default Home;