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


const TheHeart: React.FC = () => {
  const { userId } = useAuth();
  const [profile, setProfile] = useState<Entry[]>([]);




  useEffect(() => {
    const refProfile = firestore.collection('Famous')
    refProfile.where('triad', '==', "heart").get()
      .then(({ docs }) => setProfile(docs.map(toEntry)));
  }, [])

  function getAllIndexes(arr, val) {
    var indexes = [], i;
    for(i = 0; i < arr.length; i++)
        if (arr[i].type === val)
            indexes.push(arr[i]);
    return indexes;
}

  const type2 =getAllIndexes(profile, "2");
  const type3 =getAllIndexes(profile, "3");
  const type4 =getAllIndexes(profile, "4");
 
console.log(type2)


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
  <IonCardTitle className="title-triad" color="light"> The triad of The Heart</IonCardTitle>
    <div className="description-card-content-container">
    <p className="home-card-content-text">
    The types in the Heart Centre have gifts and issues 
    involving their emotions. When they are healthy and balanced,
     their use of emotion is constructive and especially beneficial 
     to their relationships. When they are unhealthy, their emotions become 
     imbalanced. The essential qualities of this centre involve the deep connection
      with the intelligence of the heart. The heart is our source of
       feelings and emotional connection with others. It helps us recognize 
       our love and value for ourselves and for others. Through feelings and 
       value, we understand our identity, who we (and others) really are.
    </p>
    </div>
    <h2 className="type-text-theheart">Enneagram Type "2"</h2>
    <div className="personalitie-avatar-container-theheart box-2">
                          {type2.map((prof) =>
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
                      <h2 className="type-text-theheart ">Enneagram Type "3"</h2>
                      <div className="personalitie-avatar-container-theheart ">
                          {type3.map((prof) =>
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
                      <h2 className="type-text-theheart">Enneagram Type "4"</h2>
                      <div className="personalitie-avatar-container-theheart">
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

export default TheHeart;
