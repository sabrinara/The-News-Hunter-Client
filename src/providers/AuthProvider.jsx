import { createContext, useEffect, useState } from "react";
import { app } from "../config/firebase.config";
import {
    GoogleAuthProvider, createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";



export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [role, getRole] = useState(null);

    useEffect(() => {
        fetch(`https://the-news-hunter-server-lac.vercel.app/users`)
            .then(res => res.json())
            .then(data => {
               const filteredData = data.find(u => u.email === user?.email);
            //    console.log(filteredData);
               getRole(filteredData?.role);
                
            })

    })
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, new GoogleAuthProvider);
    };

    const handleUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('user in the auth state changed', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, []);

    const authInfo = {
        user,
        role,
        loading,
        createUser,
        signIn,
        googleSignIn,
        handleUpdateProfile,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;