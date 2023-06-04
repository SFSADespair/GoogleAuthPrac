import React from 'react'
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../../firebase/firebaseConfig'
import Welcome from '../Welcome/Welcome';

const SignIn = ({sUser}) => {
    let user = []
    const handleGoogle = async (e) => {
        const provider = await new GoogleAuthProvider()
        return signInWithPopup(auth, provider).then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential.accessToken

            localStorage.setItem('name', result.user.displayName)
            localStorage.setItem('email', result.user.email)
            localStorage.setItem('profilePic', result.user.photoURL)
            localStorage.setItem('token', token)

            sUser({
                "name": localStorage.getItem("name"),
                "email": localStorage.getItem("email"),
                "profilePic": localStorage.getItem("profilePic")
            })
        }).catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            const email = error.customData.email
            const credential = GoogleAuthProvider.credentialFromError(error)
            
            const errors = {
                "Error Code": errorCode,
                "Error Message": errorMessage,
                "Email": email,
                "Credential": credential
            }

            console.log(errors)
            return (
                <>
                    <div>
                        <p>There was a problem signing in with your account</p>
                    </div>
                </>
            )
        })
            
    }

    return (
        <>
            <button onClick={handleGoogle}>
                Sign In With Google
            </button>
        </>
    )
}

export default SignIn