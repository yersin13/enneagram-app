import {
  IonAvatar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
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

const Home: React.FC = () => {

  const { userId, email } = useAuth();
  const [entries, setEntries] = useState<Entry[]>([]);
  const [entry, setEntry] = useState<Entry[]>([]);
  
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

  const title = entry.map(({title}) => title)[number]
  const quote = entry.map(({quote}) => quote)[number]
  const description = entry.map(({description}) => description)[number]
  const numberType = entry.map(({numberType}) => numberType)[number]
  const link = entry.map(({link}) => link)[number]




  return (
    <IonPage>
      <IonHeader >
        <IonToolbar className="header">
          <IonTitle>
          </IonTitle>

        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItem>
            <IonGrid>
              <IonRow>
                <div className="home-title-container">
                  <IonCol size="6" >
                    <div className="home-col-title-left">
                      <IonAvatar  >
                        <img className="home-avatar" src={link} alt="" />
                      </IonAvatar>
                      <div>

                        <h5 className="home-name"> Yersin Hernandez</h5>
                        <p className="home-email">{email}</p>

                      </div>
                    </div>

                  </IonCol>
                  <IonCol size="6" className="home-col-title-right">
                    <IonCard className="home-title-card">

                      <div className="home-title-content">
                        <IonCardHeader className="home-card-header" >

                          <IonCardTitle className="home-title-card-title" color="light">
                            <h5 className="home-title-card-title-title">{title}</h5>
                          </IonCardTitle>
                          <IonCardContent className="home-title-card-number">
                            <h1 className="home-title-card-number-number">{numberType}</h1>
                          </IonCardContent>
                        </IonCardHeader>

                      </div>
                    </IonCard>
                  </IonCol>
                </div>
              </IonRow>
            </IonGrid>
          </IonItem>

      
            <IonGrid className="home-grid ion-padding">
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

              <IonRow className="home-row-top " >
                <IonCol>
                  <IonCard className="home-card">
                    <div className=" home-card-img-container">
                    </div>
                    <div className="home-card-content">
                      <IonCardHeader className="home-card-header" >

                        <IonCardTitle color="light">Today's quote from {numberType} Ennetype.</IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent>
                      <p className="home-card-content-text">
                     {quote}
                        </p>
                      </IonCardContent>
                    </div>
                  </IonCard>
                </IonCol>
              </IonRow>

              <IonRow className="home-row-top" >
                <IonCol>
                  <IonCard className="home-card">
                    <div className=" home-card-img-container">
                    </div>
                    <div className="home-card-content">
                      <IonCardHeader className="home-card-header" >

                        <IonCardTitle color="light">Millionaires with your same enneagram type</IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent className="personalities-container">
                      <div className="personalitie-avatar-container">
                        <div className="personalitie1">
                        <IonAvatar slot="start">
                          <img src="../assets/personalities/deep.jpg" alt=""/>
                        </IonAvatar>
                        <IonLabel><h2>Johnny Deep</h2></IonLabel>
                        </div>
                        <div className="personalitie1">
                        <IonAvatar>
                          <img src="../assets/personalities/marloon.jpg" alt=""/>
                        </IonAvatar>
                        <IonLabel><h2>Marloon Bradon</h2></IonLabel>
                        </div>
                        <div className="personalitie1">
                        <IonAvatar>
                          <img src="../assets/personalities/bob.jpg" alt=""/>
                        </IonAvatar>
                        <IonLabel className="personalitie-name"><h2>Bob Dylan</h2></IonLabel>
                        </div>
                      </div>
                      
                      </IonCardContent>
                    </div>
                  </IonCard>
                </IonCol>
              </IonRow>

              <IonRow className="home-row-top" >
                <IonCol>
                  <IonCard className="home-card">
                    <div className=" home-card-img-container">
                    </div>
                    <div className="home-card-content">
                      <IonCardHeader className="home-card-header" >

                        <IonCardTitle color="light">take advance test</IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent>
                        <h1>4</h1>
                      </IonCardContent>
                    </div>
                  </IonCard>
                </IonCol>
              </IonRow>


              <IonRow className="home-row-top" >
                <IonCol>
                  <IonCard className="home-card">
                    <div className=" home-card-img-container">
                    </div>
                    <div className="home-card-content">
                      <IonCardHeader className="home-card-header" >

                        <IonCardTitle color="light">How to deal with fear</IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent>
                        <h1>4</h1>
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

export default Home;
