import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToast,
  IonToggle,
  IonToolbar,
} from '@ionic/react';
import React, { useState } from 'react';


  



const Test: React.FC = () => {



  



  const Result = ()=>{
    if( PrimeraRespuesta == null || SegundaRespuesta == null ){
      console.log(PrimeraRespuesta,SegundaRespuesta)
      setStatus({ loading: false, error: true })
    }
    
   }

   const [status, setStatus] = useState({ loading: false, error: false });
  const [PrimeraRespuesta, setPrimeraRespuesta] = useState<string>();
  const [SegundaRespuesta, setSegundaRespuesta] = useState<string>();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Test</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div>
          <IonCard className="test-card-quetionary-1">

            <div className="test-card-content">
              <IonCardHeader className="test-card-header" >

                <IonCardTitle color="light"> Enneagram Test (Riso-Hudson)</IonCardTitle>
              </IonCardHeader>
              <IonCardContent className="test-card-content">
                <div className="test-card-content-container">

                  <IonList className="test-card">
                    <IonItem lines="none">
                      <IonCard>
                        <div className="test-card-content">
                          <IonCardHeader className="test-card-header">
                            <IonCardTitle><h1>A.-</h1></IonCardTitle>
                          </IonCardHeader>
                          <IonCardContent>
                            <p className="home-card-content-text">
                              I have tended to be fairly independent and assertive: I've felt that life works best when you meet it head-on. I set my own goals, get involved, and want to make things happen. I don't like sitting around - I want to achieve something big and have an impact. I don't necessarily seek confrontations, but I don't let people push me around, either. Most of the time, I know what I want, and I go for it. I tend to work hard and to play hard.
          </p>
                          </IonCardContent>
                        </div>
                      </IonCard>
                    </IonItem>
                    <IonItem lines="none">
                      <IonCard>
                        <div className="test-card-content">
                          <IonCardHeader className="test-card-header">
                            <IonCardTitle><h1>B.-</h1></IonCardTitle>
                          </IonCardHeader>
                          <IonCardContent>
                            <p className="test-card-content-text">
                              I have tended to be quiet and am used to being on my own. I usually don't draw much attention to myself socially, and it's generally unusual for me to assert myself all that forcefully. I don't feel comfortable taking the lead or being as competitive as others. Many would probably say that I'm something of a dreamer - a lot of my excitement goes on in my imagination. I can be quite content without feeling I have to be active all the time.
          </p>
                          </IonCardContent>
                        </div>
                      </IonCard>
                    </IonItem>
                    <IonItem lines="none">
                      <IonCard>
                        <div className="test-card-content">
                          <IonCardHeader className="test-card-header">
                            <IonCardTitle><h1>C.-</h1></IonCardTitle>
                          </IonCardHeader>
                          <IonCardContent>
                            <p className="test-card-content-text">
                              I have tended to be extremely responsible and dedicated. I feel terrible if I don't keep my commitments and do what's expected of me. I want people to know that I'm there for them and that I will do what I believe is best for them. I've often made great personal sacrifices for the sake of others, whether they know it or not. I often don't take adequate care of myself - I do the work that needs to be done and relax(and do what I want) if there's time left.
          </p>
                          </IonCardContent>
                        </div>
                      </IonCard>
                    </IonItem>
                    <IonItem className="test-select">
                      <IonLabel>
                        selected letter</IonLabel>
                      <IonSelect className="test-selec-box" value={PrimeraRespuesta} placeholder="Select One" onIonChange={e => setPrimeraRespuesta(e.detail.value)}>
                        <IonSelectOption value="A">A</IonSelectOption>
                        <IonSelectOption value="B">B</IonSelectOption>
                        <IonSelectOption value="C">C</IonSelectOption>
                      </IonSelect>
                    </IonItem>
                  </IonList>
                </div>

                <div className="test-card-content-container">

<IonList className="test-card">
  <IonItem lines="none">
    <IonCard>
      <div className="test-card-content">
        <IonCardHeader className="test-card-header">
          <IonCardTitle><h1>X.-</h1></IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <p className="home-card-content-text">
            I have tended to be fairly independent and assertive: I've felt that life works best when you meet it head-on. I set my own goals, get involved, and want to make things happen. I don't like sitting around - I want to achieve something big and have an impact. I don't necessarily seek confrontations, but I don't let people push me around, either. Most of the time, I know what I want, and I go for it. I tend to work hard and to play hard.
</p>
        </IonCardContent>
      </div>
    </IonCard>
  </IonItem>
  <IonItem lines="none">
    <IonCard>
      <div className="test-card-content">
        <IonCardHeader className="test-card-header">
          <IonCardTitle><h1>Y.-</h1></IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <p className="test-card-content-text">
            I have tended to be quiet and am used to being on my own. I usually don't draw much attention to myself socially, and it's generally unusual for me to assert myself all that forcefully. I don't feel comfortable taking the lead or being as competitive as others. Many would probably say that I'm something of a dreamer - a lot of my excitement goes on in my imagination. I can be quite content without feeling I have to be active all the time.
</p>
        </IonCardContent>
      </div>
    </IonCard>
  </IonItem>
  <IonItem lines="none">
    <IonCard>
      <div className="test-card-content">
        <IonCardHeader className="test-card-header">
          <IonCardTitle><h1>Z.-</h1></IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <p className="test-card-content-text">
            I have tended to be extremely responsible and dedicated. I feel terrible if I don't keep my commitments and do what's expected of me. I want people to know that I'm there for them and that I will do what I believe is best for them. I've often made great personal sacrifices for the sake of others, whether they know it or not. I often don't take adequate care of myself - I do the work that needs to be done and relax(and do what I want) if there's time left.
</p>
        </IonCardContent>
      </div>
    </IonCard>
  </IonItem>
  <IonItem className="test-select">
  
   
      <IonLabel>
      selected letter</IonLabel>
      <IonSelect className="test-selec-box" value={SegundaRespuesta} placeholder="Select One" onIonChange={e => setSegundaRespuesta(e.detail.value)}>
      <IonSelectOption value="A">X</IonSelectOption>
      <IonSelectOption value="B">Y</IonSelectOption>
      <IonSelectOption value="C">Z</IonSelectOption>
    </IonSelect>
 
    
  </IonItem>
</IonList>
</div>
              </IonCardContent>
            </div>
          </IonCard>
          {/* --------------------------------------------------- */}

          <IonItemDivider>

          </IonItemDivider>

          <IonButton onClick={Result} expand="block" >Save</IonButton>
        </div>
       
        {status.error &&  <IonToast duration={2000} color="danger" isOpen={true} message={'Please select both letters'} />}
              
      </IonContent>
      
    </IonPage>
  );
};

export default Test;
