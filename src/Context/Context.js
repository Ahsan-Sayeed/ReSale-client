import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase';
import {getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup , signInWithEmailAndPassword ,createUserWithEmailAndPassword,signOut, updateProfile } from 'firebase/auth';
import { GET } from '../Utilities/RequestObjects';

const auth = getAuth(app);
export const AuthContext = createContext();

const Context = ({children}) => {
    const [user,setUser] = useState(null);
    const [userServer,setUserServer] = useState(null);
    const [loading,setLoading] = useState(true);
    const googleAuthProvider = new GoogleAuthProvider();

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            setLoading(false);
            setUser(user);
            if(user?.uid){
                GET(`/users/${user?.uid}`)
                .then(res=>{
                    setUserServer(res.data);
                })
                .catch(err=>{
                    console.log(err);
                    alert('something went wrong');
                })
            }
        });
        return ()=>{
            unsubscribe();
        };
    },[loading,user,userServer]);

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth,googleAuthProvider);
    }


    const signInWithEmail = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    
    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const updateUser = (obj)=> updateProfile(auth.currentUser,obj);

    const logOut = () =>{
        return signOut(auth);
    }

    const userInfo = {user,userServer,loading,signInWithGoogle,signInWithEmail,createUser,logOut,updateUser};
    // const userInfo= {};
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context;