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



  console.log(title);
  if (title == null) {
    return <IonPage>
      <IonHeader >
        <IonToolbar className="header">
          <IonTitle>
            Welcome {name}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonCard className="home-title-card">

              <div className="home-title-content">
                <IonCardHeader className="home-card-header" >

                  <IonCardTitle className="home-title-card-title" color="light">
                    <h3>Please Take the Test so we can display your personalised information.</h3>
                  </IonCardTitle>

                </IonCardHeader>

              </div>
            </IonCard>

          </IonItem>
          <div className="ion-padding">
            <IonButton className="dashboard-test-button" routerLink="/my/intro-test" expand='block' >Take the Enneagram test</IonButton>
          </div>
        </IonList>

      </IonContent>


    </IonPage>
  }

  return (
    <IonPage>


      <IonContent className="ion-padding">
        <IonHeader className="prof-header" >

          <IonTitle className="prof-title">
            <div className="prof-container-top">
              <IonAvatar className="prof-avatar" >
                <img className="home-avatar" src={link} alt="" />
              </IonAvatar>


              <h5 className="home-name">{name}</h5>
              <IonChip>
                <IonLabel color="primary">{title} "{numberType}"</IonLabel>
              </IonChip>

            </div>

          </IonTitle>

        </IonHeader>
        <IonList>



          <IonGrid className="home-grid ion-padding">
            <IonRow className="home-row-top no-padding" >
              <IonCol>
                <IonCard className="home-card">

                  <div className="home-card-content">
                    <div className="home-card-title-header">
                      <IonCardHeader className="home-card-header" >

                        <IonCardTitle color="light"> Enneagram {numberType} Description</IonCardTitle>
                      </IonCardHeader>
                    </div>

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
                  <div className="home-card-title-header">
                    <IonCardHeader className="home-card-header" >

                      <IonCardTitle color="light">Today's quote from {numberType} Ennetype.</IonCardTitle>
                    </IonCardHeader>
                    </div>
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
                            <img src="../assets/personalities/deep.jpg" alt="" />
                          </IonAvatar>
                          <IonLabel><h2>Johnny Deep</h2></IonLabel>
                        </div>
                        <div className="personalitie1">
                          <IonAvatar>
                            <img src="../assets/personalities/marloon.jpg" alt="" />
                          </IonAvatar>
                          <IonLabel><h2>Marloon Bradon</h2></IonLabel>
                        </div>
                        <div className="personalitie1">
                          <IonAvatar>
                            <img src="../assets/personalities/bob.jpg" alt="" />
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
