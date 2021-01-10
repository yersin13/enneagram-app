import {
  IonAvatar,
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../auth';
import { firestore } from '../firebase';
import { Entry, toEntry } from '../models';


const TheGut: React.FC = () => {
  const { userId } = useAuth();
  const [profile, setProfile] = useState<Entry[]>([]);




  useEffect(() => {
    const refProfile = firestore.collection('Famous')
    refProfile.where('triad', '==', "gut").get()
      .then(({ docs }) => setProfile(docs.map(toEntry)));
  }, [])

  function getAllIndexes(arr, val) {
    var indexes = [], i;
    for (i = 0; i < arr.length; i++)
      if (arr[i].type === val)
        indexes.push(arr[i]);
    return indexes;
  }

  const type8 = getAllIndexes(profile, "8");
  const type9 = getAllIndexes(profile, "9");
  const type1 = getAllIndexes(profile, "1");

  console.log(type8)


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="header">
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>


        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonList>


            <IonCard className="home-card">

              <div className="home-card-content">
               
                <IonCardContent className="traid-card-content">
                <IonCardTitle className="title-triad" color="light"> The triad of The Gut</IonCardTitle>
                  <div className="description-card-content-container">
                    <p className="home-card-content-text">
                      The types in the Gut Centre have gifts and issues involving their instinct. When they are healthy and balanced, they have strong relational skills with others and their environment. When they are unhealthy, their relationship skills become imbalanced.

                      The essential qualities of this Centre involves the deep connection with the intelligence of the body, their instinct. Instinct is a type of knowledge that is not often recognized. Our instincts involve our sense of vitality and assertion. Instinct involves our inner wants and our ability to assert them in a way that is consistent and harmonious with the world around us.
    </p>
                  </div>
                  <h2 className="type-text-thegut">Enneagram Type "8"</h2>
                  <div className="personalitie-avatar-container-thegut">
                    {type8.map((prof) =>
                      <IonItem className="thegut personalitie-item-link" lines="none" button routerLink={`/my/personalities/${prof.id}`}  >
                        <div className="personalities-item-div">
                          <div className="personalitie1" >

                            <IonAvatar className="personalitie-avatar" slot="start">
                              <img src={prof.link} alt="" />
                            </IonAvatar>
                          </div>

                          <div className="personalitie-name-container" >
                            <p className="name-gut" >{prof.name}</p>
                          </div>
                        </div>
                      </IonItem>
                    )}
                  </div>
                  <h2 className="type-text-thegut ">Enneagram Type "9"</h2>
                  <div className="personalitie-avatar-container-thegut ">
                    {type9.map((prof) =>
                      <IonItem className="thegut personalitie-item-link" lines="none" button routerLink={`/my/personalities/${prof.id}`}  >
                        <div className="personalities-item-div">
                          <div className="personalitie1" >

                            <IonAvatar className="personalitie-avatar" slot="start">
                              <img src={prof.link} alt="" />
                            </IonAvatar>
                          </div>

                          <div className="personalitie-name-container" >
                            <p className="name-gut" >{prof.name}</p>
                          </div>
                        </div>
                      </IonItem>
                    )}
                  </div>
                  <h2 className="type-text-thegut">Enneagram Type "1"</h2>
                  <div className="personalitie-avatar-container-thegut">
                    {type1.map((prof) =>
                      <IonItem className="thegut personalitie-item-link" lines="none" button routerLink={`/my/personalities/${prof.id}`}  >
                        <div className="personalities-item-div">
                          <div className="personalitie1" >

                            <IonAvatar className="personalitie-avatar" slot="start">
                              <img src={prof.link} alt="" />
                            </IonAvatar>
                          </div>

                          <div className="personalitie-name-container" >
                            <p className="name-gut" >{prof.name}</p>
                          </div>
                        </div>
                      </IonItem>
                    )}
                  </div>



                </IonCardContent>
              </div>
            </IonCard>
          </IonList>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default TheGut;
