import Layout from '../components/Layout';
import '../styles/globals.css';
import { GoogleMap, withScriptjs } from "react-google-maps";




function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;