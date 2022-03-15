import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";        

// import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import "primereact/resources/themes/vela-blue/theme.css"; 
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
