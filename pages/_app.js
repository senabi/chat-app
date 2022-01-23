import "../styles/globals.css";
import "../firebase/config";
// import "react-firebaseui";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
