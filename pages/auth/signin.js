import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase/config";

// //TODO anon

const uiConfig = {
  signInSuccessUrl: "/",
  signInOptions: [GoogleAuthProvider.PROVIDER_ID],
};

export default function SignIn() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        background: "black",
      }}
    >
      <h1>Sign In With</h1>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </div>
  );
}
