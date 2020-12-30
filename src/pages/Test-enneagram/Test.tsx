import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonLoading,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToast,
  IonToolbar,
} from '@ionic/react';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Entry } from '../../models';
import { useAuth } from '../../auth';
import { firestore } from '../../firebase';
import { useHistory } from 'react-router';

import dayjs from 'dayjs'


interface IFormInputs {
  PrimeraRespuesta: string;
  SegundaRespuesta: string;

}
function formatDate(isoString){
  return dayjs(isoString).format('D MMM YYYY H m ss');
}


const Test: React.FC = () => {
  const { userId } = useAuth();
  const history = useHistory();
  const [status, setStatus] = useState({ loading: false, error: false });
  const [PrimeraRespuesta, setPrimeraRespuesta] = useState<string>();
  const [SegundaRespuesta, setSegundaRespuesta] = useState<string>();

const dateNow= formatDate(Date.now());


  const validationSchema = yup.object().shape({
    PrimeraRespuesta: yup.string().required(),
    SegundaRespuesta: yup.string().required(),
  });

  const { register, handleSubmit, errors } = useForm<Entry>({
    validationSchema,
  });



  const onSubmit = async (data: Entry) => {
    console.log(data);
    if (data.PrimeraRespuesta === "A" && data.SegundaRespuesta === "X") {
      setStatus({ loading: true, error: false });
      console.log('Eneatype 7')
      const entriesRef = firestore.collection('users').doc(userId)
        .collection('Enneagram');
      const entryData = { Enneatype: "7",date: dateNow };
      const entryRef = await entriesRef.add(entryData);
      console.log('saved', entryRef.id);
      history.push("/my/test-result");
      setStatus({ loading: false, error: false });
    } else
      if (data.PrimeraRespuesta === "A" && data.SegundaRespuesta === "Y") {
        setStatus({ loading: true, error: false });
        console.log('Eneatype 8');
        const entriesRef = firestore.collection('users').doc(userId)
          .collection('Enneagram');
        const entryData = { Enneatype: "8" ,date: dateNow };
        const entryRef = await entriesRef.add(entryData);
        history.push("/my/test-result");
        setStatus({ loading: false, error: false });
      } else
        if (data.PrimeraRespuesta === "A" && data.SegundaRespuesta === "Z") {
          setStatus({ loading: true, error: false });
          console.log('Eneatype 3')
          const entriesRef = firestore.collection('users').doc(userId)
            .collection('Enneagram');
          const entryData = { Enneatype: "3" ,date: dateNow };
          const entryRef = await entriesRef.add(entryData);
          history.push("/my/test-result");
          setStatus({ loading: false, error: false });
        } else
          if (data.PrimeraRespuesta === "B" && data.SegundaRespuesta === "X") {
            setStatus({ loading: true, error: false });
            console.log('Eneatype 9')
            const entriesRef = firestore.collection('users').doc(userId)
              .collection('Enneagram');
            const entryData = { Enneatype: "9" ,date: dateNow };
            const entryRef = await entriesRef.add(entryData);
            history.push("/my/test-result");
            setStatus({ loading: false, error: false });

          } else
            if (data.PrimeraRespuesta === "B" && data.SegundaRespuesta === "Y") {
              setStatus({ loading: true, error: false });
              console.log('Eneatype 4')
              const entriesRef = firestore.collection('users').doc(userId)
                .collection('Enneagram');
              const entryData = { Enneatype: "4" ,date: dateNow };
              const entryRef = await entriesRef.add(entryData);
              history.push("/my/test-result");
              setStatus({ loading: false, error: false });
            } else
              if (data.PrimeraRespuesta === "B" && data.SegundaRespuesta === "Z") {
                setStatus({ loading: true, error: false });
                console.log('Eneatype 5')
                const entriesRef = firestore.collection('users').doc(userId)
                  .collection('Enneagram');
                const entryData = { Enneatype: "5" ,date: dateNow };
                const entryRef = await entriesRef.add(entryData);
                history.push("/my/test-result");
                setStatus({ loading: false, error: false });
              } else
                if (data.PrimeraRespuesta === "C" && data.SegundaRespuesta === "X") {
                  setStatus({ loading: true, error: false });
                  console.log('Eneatype 2')
                  const entriesRef = firestore.collection('users').doc(userId)
                    .collection('Enneagram');
                  const entryData = { Enneatype: "2" ,date: dateNow };
                  const entryRef = await entriesRef.add(entryData);
                  history.push("/my/test-result");
                  setStatus({ loading: false, error: false });
                } else
                  if (data.PrimeraRespuesta === "C" && data.SegundaRespuesta === "Y") {
                    setStatus({ loading: true, error: false });
                    console.log('Eneatype 6')
                    const entriesRef = firestore.collection('users').doc(userId)
                      .collection('Enneagram');
                    const entryData = { Enneatype: "6" ,date: dateNow };
                    const entryRef = await entriesRef.add(entryData);
                    history.push("/my/test-result");
                    setStatus({ loading: false, error: false });
                  } else
                    if (data.PrimeraRespuesta === "C" && data.SegundaRespuesta === "Z") {
                      setStatus({ loading: true, error: false });
                      console.log('Eneatype 1')
                      const entriesRef = firestore.collection('users').doc(userId)
                        .collection('Enneagram');
                      const entryData = { Enneatype: "1" ,date: dateNow };
                      const entryRef = await entriesRef.add(entryData);
                      history.push("/my/test-result");
                      setStatus({ loading: false, error: false });
                    }
  };

  const options = {
    cssClass: 'my-custom-interface'
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Test</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">

        <form onSubmit={handleSubmit(onSubmit)}>

          <div>
            <IonCard className="test-card-quetionary-1">

              <div className="test-card-content">
                <IonCardHeader className="test-card-header" >

                  <IonCardTitle color="light"> Enneagram Test (Riso-Hudson)</IonCardTitle>
                </IonCardHeader>
                <IonCardContent className="test-card-content">
                  <div className="test-instructions">
                    <p>Read each of the following paragraphs carefully and select the one that you most identify with A, B, or C and then X, Y or Z. </p>
                  </div>
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
                        <IonSelect interface="popover" interfaceOptions={options} value={PrimeraRespuesta} name="PrimeraRespuesta" ref={register} placeholder="Select One" onIonChange={e => setPrimeraRespuesta(e.detail.value)}>
                          <IonSelectOption className="test-selec-box-option" value="A"  >A</IonSelectOption>
                          <IonSelectOption  className="test-selec-box-option" value="B"  >B </IonSelectOption>
                          <IonSelectOption  className="test-selec-box-option" value="C"  >C</IonSelectOption>
                        </IonSelect>

                      </IonItem>
                      <div>
                        {errors.PrimeraRespuesta && <p className="test-selection-error">{errors.PrimeraRespuesta.message}</p>}
                      </div>
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
                        <IonSelect interface="popover" interfaceOptions={options}  className="test-selec-box" ref={register} name="SegundaRespuesta" value={SegundaRespuesta} placeholder="Select One" onIonChange={e => setSegundaRespuesta(e.detail.value)}>
                          <IonSelectOption className="test-selec-box-option" value="X"  >X</IonSelectOption>
                          <IonSelectOption className="test-selec-box-option" value="Y"  >Y</IonSelectOption>
                          <IonSelectOption  className="test-selec-box-option" value="Z"  >Z</IonSelectOption>
                        </IonSelect>


                      </IonItem>
                      <div>
                        {errors.SegundaRespuesta && <p className="test-selection-error">{errors.SegundaRespuesta.message}</p>}
                      </div>
                    </IonList>
                  </div>
                </IonCardContent>
              </div>
            </IonCard>
            {/* --------------------------------------------------- */}

            <IonItemDivider>

            </IonItemDivider>

            <IonButton expand="block" type="submit">Save</IonButton>
          </div>
        </form>
        {status.error && <IonToast duration={2000} color="danger" isOpen={true} message={'Please select both letters'} />}
        <IonLoading isOpen={status.loading} />
      </IonContent>

    </IonPage>
  );
};

export default Test;
