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


const TheHead: React.FC = () => {
  const { userId } = useAuth();
  const [profile, setProfile] = useState<Entry[]>([]);




  useEffect(() => {
    const refProfile = firestore.collection('Famous')
    refProfile.where('triad', '==', "head").get()
      .then(({ docs }) => setProfile(docs.map(toEntry)));
  }, [])

  function getAllIndexes(arr, val) {
    var indexes = [], i;
    for(i = 0; i < arr.length; i++)
        if (arr[i].type === val)
            indexes.push(arr[i]);
    return indexes;
}

  const type5 =getAllIndexes(profile, "5");
  const type6 =getAllIndexes(profile, "6");
  const type4 =getAllIndexes(profile, "7");
 
console.log(type5)


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
  <IonCardTitle className="title-triad" color="light"> The triad of The Head</IonCardTitle>
    <div className="description-card-content-container">
    <p className="home-card-content-text">
    The types in the Head Centre have gifts and issues involving their thinking. When they are healthy and balanced, they have incredible keen insights and ideas. When they are unhealthy, their thinking becomes imbalanced. The essential qualities of this centre involve the deep connection with the intelligence of the mind. The gifts of the mind include the ability to observe, perceive, and effortlessly understand. The mind also provides us with.
    </p>
    </div>
    <h2 className="type-text-thehead">Enneagram Type "5"</h2>
    <div className="personalitie-avatar-container-thehead box-2">
                          {type5.map((prof) =>
                            <IonItem className="thegut personalitie-item-link" lines="none" button routerLink={`/my/personalities/${prof.id}`}  >
                              <div className="personalities-item-div">
                              <div className="personalitie1" >
                                 
                                <IonAvatar className="personalitie-avatar" slot="start">
                                  <img src={prof.link} alt="" />
                                </IonAvatar>
                                </div>

                                <div className="personalitie-name-container" >
                                <p className="name-personalities" >{prof.name}</p>
                                </div>
                                </div>
                           </IonItem>
                          )}
                      </div>
                      <h2 className="type-text-thehead ">Enneagram Type "6"</h2>
                      <div className="personalitie-avatar-container-thehead ">
                          {type6.map((prof) =>
                            <IonItem className="thegut personalitie-item-link" lines="none" button routerLink={`/my/personalities/${prof.id}`}  >
                              <div className="personalities-item-div">
                              <div className="personalitie1" >
                                 
                                <IonAvatar className="personalitie-avatar" slot="start">
                                  <img src={prof.link} alt="" />
                                </IonAvatar>
                                </div>

                                <div className="personalitie-name-container" >
                                <p className="name-personalities" >{prof.name}</p>
                                </div>
                                </div>
                           </IonItem>
                          )}
                      </div>
                      <h2 className="type-text-thehead">Enneagram Type "7"</h2>
                      <div className="personalitie-avatar-container-thehead">
                          {type4.map((prof) =>
                            <IonItem className="thegut personalitie-item-link" lines="none" button routerLink={`/my/personalities/${prof.id}`}  >
                              <div className="personalities-item-div">
                              <div className="personalitie1" >
                                 
                                <IonAvatar className="personalitie-avatar" slot="start">
                                  <img src={prof.link} alt="" />
                                </IonAvatar>
                                </div>

                                <div className="personalitie-name-container" >
                                <p className="name-personalities" >{prof.name}</p>
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

export default TheHead;
