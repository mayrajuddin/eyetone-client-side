import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
export const authContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()

    const setLocalStorage = (key, value) => localStorage.setItem(key, value)

    // get token 
    const getToken = async (email) => {
        const res = await fetch(`${process.env.REACT_APP_API_URI}/create-token`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email })
        })

        return await res.json();
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = async (email, password) => {
        const token = await getToken(email)

        setLocalStorage('token', token.token)
        setToken(token.token)
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        localStorage.clear('token')
        return signOut(auth)
    }
    const googleLogin = async () => {

        setLoading(true)
        const data = await signInWithPopup(auth, googleProvider)
        console.log(data.user.email)
        if (data) {
            const token = await getToken(data.user.email)

            setLocalStorage('token', token.token)
            setToken(token.token)
        }
    }
    const updateInfo = (obj) => {
        return updateProfile(auth.currentUser, obj)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])
    const authInfo = { user, loading, createUser, logOut, loginUser, googleLogin, updateInfo, token }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;