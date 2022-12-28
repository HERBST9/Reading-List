import {db} from '../firebase/config'
import {collection, onSnapshot, query, where } from 'firebase/firestore'
import { useEffect, useRef, useState } from 'react';



export const useCollection = (c, _q) => {
    const [docs, setDocs] = useState(null)

    const q = useRef(_q).current

    useEffect(() => {
        let ref = collection(db, c)

        if(q) {
          ref = query(ref, where(...q))
        }

     const unsub = onSnapshot(ref, (snapshot) => {
        let results = []
        snapshot.docs.forEach(doc => {
         results.push({id: doc.id, ...doc.data()})
      })
      setDocs(results)

     })
     return () => unsub()


    },[c])
    return {docs};
}
 
