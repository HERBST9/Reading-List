import { useState } from "react";
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";





export const useSignup = () => {
    const [error, setError] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = (email,password) => {

        setError(null)
        createUserWithEmailAndPassword(auth,email,password) 
        .then((res) => {
            dispatch({type: 'AUTH_IS_READY', payload: res.user})

        }) 
        .catch((e) => {
           setError(e.message)
        })
    }

    return { error, signup };
}
 
