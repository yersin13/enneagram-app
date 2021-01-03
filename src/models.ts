

export interface Entry {
    id: string;
    Enneatype:string;
    PrimeraRespuesta: string;
    SegundaRespuesta: string;
    date:string;
    description:string;
    quote: string;
    title:string;
    numberType:string;
    link:string;
    testTaken:boolean;
    name:string;
    net:string;
 

}


export function toEntry(doc): Entry{
   return {id: doc.id, ...doc.data()};
}


// doc: firebase.firestore.DocumentSnapshot