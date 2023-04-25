import React from 'react'
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../../firebase/firebaseConfig'
import Welcome from '../Welcome/Welcome';

const SignIn = ({sUser}) => {
    let user = []
    const handleGoogle = async (e) => {
        const provider = await new GoogleAuthProvider()
        return signInWithPopup(auth, provider).then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential.accessToken
            // The signed-in user info.
            user = result.user.displayName
            sUser(user)
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code
            const errorMessage = error.message
            // The email of the user's account used.
            const email = error.customData.email
            // The AuthCredential type that was used.
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