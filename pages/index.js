import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase/config";
import Button from "../components/Button";
import Channel from "../components/Channel";
import { useRouter } from "next/router";
// import SignIn from "../components/SignIn";
// import SignInScreen from "./auth";

export default function Home() {
  const signOut = async () => {
    try {
      auth.signOut();
    } catch (err) {
      console.log(err);
    }
  };

  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  // console.log(`Loading: ${loading}`);
  console.log(user);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      {user ? (
        <>
          <Button onClick={signOut}> Sign Out</Button>
          <h1> Welcome to chat</h1>
          <Channel onClick={user} db={db} />
        </>
      ) : (
        <Button
          onClick={() => {
            router.push("/auth/signin");
          }}
        >
          Sign In
        </Button>
      )}
    </div>
  );
}
