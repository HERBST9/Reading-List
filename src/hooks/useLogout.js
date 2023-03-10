import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

 
 
 
 export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const logout = () => {
        signOut(auth)
        .then(() => {
            dispatch({ type: 'LOGOUT'})
        }) 
        .catch((e) => {
            console.log(e.message)
        })
    }
    return {logout};
}
 
