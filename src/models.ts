

export interface Entry {
    id: string;
    Enneatype:string;
    PrimeraRespuesta: string;
    SegundaRespuesta: string;
    date:string;
   
  

}

export function toEntry(doc): Entry{
   return {id: doc.id, ...doc.data()};
}

// doc: firebase.firestore.DocumentSnapshot