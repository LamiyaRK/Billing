import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/Firebase.init.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
const auth = getAuth(app);
export const AuthContext=createContext();
const AuthProvider = ({children}) => {
    const [adata,setAdata]=useState([]);
    const [user,setUser]=useState(null);
 const [load,setLoad]=useState(true);
   const [money,setMoney]=useState(10000);
    const cRegister=(email,pass)=>{
        
        return createUserWithEmailAndPassword(auth,email,pass)
    }
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,(Cuser)=>{
            setUser(Cuser)
            setLoad(false)
        });
        return()=>{
            unSubscribe()
           
       
        }
    },[])
    const updateUserInfo=(updateData)=>{
        return updateProfile(auth.currentUser,updateData);

    }
    const logOut=()=>{
        return signOut(auth);
    }
    const signIn=(email,pass)=>{
        
        return signInWithEmailAndPassword(auth, email, pass)
    }
    const authData={
        user,
        setUser,
        cRegister,
        logOut,
        signIn,
        load,
        setLoad,
        updateUserInfo,
        money,
        setMoney,
        adata,
        setAdata
    }
    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;