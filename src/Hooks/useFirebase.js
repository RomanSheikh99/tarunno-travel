import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    }
    from "firebase/auth";
import { useEffect, useState } from "react";
import initFirebase from "../firebase/firebase.init";

initFirebase();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    // google sing in
    const googleSignIn = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({ })
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [isLoading])

    // log Out
    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => { })
        .finally(() => setIsLoading(false))
    }

    return {
        user,
        setUser,
        setError,
        setIsLoading,
        googleSignIn,
        isLoading,
        logOut,
        error
    }

};

export default useFirebase;