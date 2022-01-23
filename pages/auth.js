import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

// //TODO anon

const uiConfig = {
  signInSuccessUrl: "/",
  signInOptions: [GoogleAuthProvider.PROVIDER_ID],
};

export default function SignInScreen() {
  return (
    <div>
      <h1>Clueless messaging</h1>
      <p>Sign in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={getAuth()} />
    </div>
  );
}
