import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";

export default function Home() {
  const [user, loading, error] = useAuthState(auth);
  console.log(`Loading: ${loading}, current user: ${user}`);
  console.log(user);
  return <div>Home Page</div>;
}
