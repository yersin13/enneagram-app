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
  IonIcon,
  IonInfiniteScroll,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonSlide,
  IonSlides,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { cashOutline, heart,flashOutline,heartOutline, glassesOutline} from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useAuth } from '../auth';
import { firestore } from '../firebase';
import { Entry, toEntry } from '../models';

interface RouteParams {
  id: string;
}


const Profile: React.FC = () => {


  const { userId } = useAuth();
  const history = useHistory();
  const { id } = useParams<RouteParams>();
  const [entry, setEntry] = useState<Entry>();
  const [profile, setProfile] = useState<Entry[]>([]);
  const [icontype, setIconType]= useState<any>();

  // const id = "nkpWwO8I3lhhxeOiZyYt"


  useEffect(() => {
    const entryRef = firestore.collection('Famous');
    entryRef.where('code', '==', "all").get()
      .then(({ docs }) => setProfile(docs.map(toEntry)));

  }, [])

  const index = profile.findIndex(x => x.id === id);

  // console.log(id)
  //    console.log(profile)
  //    console.log(index)

  const slideOpts = {
    initialSlide: 1,
    speed: 100
  };

  const name = profile.map(({ name }) => name)[index]
  const type = profile.map(({ type }) => type)[index]
  const net = profile.map(({ net }) => net)[index]
  const link = profile.map(({ link }) => link)[index]
  const quote1 = profile.map(({ quote1 }) => quote1)[index]
  const quote2 = profile.map(({ quote2 }) => quote2)[index]
  const hl = profile.map(({ hl }) => hl)[index]
  const description = profile.map(({ description }) => description)[index]
  // const icontype = profile.map(({ icon }) => icon)[index]
  const colortype = profile.map(({ color }) => color)[index]
  const triad = profile.map(({ triad }) => triad)[index]

  useEffect(() => {
   if(triad == "gut"){
    setIconType(flashOutline)
   }else if(triad == "heart"){
    setIconType(heartOutline)
   }else if(triad == "head"){
    setIconType(glassesOutline)
   }

  }, [triad])

  return (
    <IonPage>

      <IonContent className="ion-padding">
        <br/>
     
        <IonHeader className="perfil-header" >

          <IonTitle className="profile-title">
            <div className="profile-container">
              <IonAvatar className="perfil-avatar" >
                <img className="home-avatar" src={link} alt="" />
              </IonAvatar>


              <h5 className="home-name">{name}</h5>
              <IonChip>
                <IonLabel color="primary">"Enneagram type {type}"&nbsp;<IonIcon color={colortype} icon={icontype}></IonIcon> </IonLabel>
              </IonChip>
              
              <div className="profile-net-div">
                <IonIcon icon={cashOutline} color="primary" />
                <IonLabel className="profile-net-text" color="primary">NWV {net}</IonLabel>
              
              </div>


            </div>

          </IonTitle>

        </IonHeader>
        <br />
        <IonList className="profile-list">
          <IonItem lines="none">
            <IonGrid className="home-grid">
         
              <IonCard className="home-card">

                <div className="home-card-content">

                <p className="profile-description"> Personality Description</p>
                  <IonCardContent  className="profile-card-content">
 
                    <p className="home-card-content-text">
                      {description}
                    </p>
                  </IonCardContent>
                </div>
              </IonCard>
            </IonGrid>
          </IonItem>
          <IonItem lines="none">
            <IonGrid className="home-grid">

              <IonCard className="home-card">

                <div className="home-card-content">


                  <p className="profile-description">Achievements</p>

                  <IonCardContent className="profile-card-content">

                    <p className="home-card-content-text">
                      {hl}
                    </p>
                  </IonCardContent>
                </div>
              </IonCard>

            </IonGrid>
          </IonItem>
  
          <IonItem lines="none"  >

<IonHeader className="quote-card-header ">
  <IonSlides pager={true} options={slideOpts} className="ion-padding">
    <IonSlide className="quote-slide">
     

      <p className="quote-text">"{quote1}"</p>
      <p className="quote-text-name">{name}</p>
     
    </IonSlide>
    <IonSlide className="quote-slide">
     
  
      <p className="quote-text">"{quote2}"</p>
      <p className="quote-text-name">{name}</p>
     
    </IonSlide>
  </IonSlides>
</IonHeader>
</IonItem>
<IonItem lines="none">
            <IonGrid className="home-grid">

              <IonCard className="home-card">

                <div className="home-card-content">


                  <p className="profile-description">Achievements</p>

                  <IonCardContent className="profile-card-content">

                    <p className="home-card-content-text">
                      {hl}
                    </p>
                  </IonCardContent>
                </div>
              </IonCard>

            </IonGrid>
          </IonItem>
        </IonList>
      <IonList>
      
      </IonList>
      </IonContent>

    </IonPage>
  );
};

export default Profile;

