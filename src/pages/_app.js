import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import Head from "next/head"
import { Fragment } from "react"
import "../../public/css/normalize.css"
import "../../public/css/responsive.css"
import "../../public/css/style.css"

const MyApp = ({ Component, pageProps })=> {
  return(
    <Fragment>
      <Head>
        <title>Raju Ahammad - A WeB Artisan || MERN Stack Developer</title>
        <link rel="icon" href="/favicon/favicon.ico"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/favicon/site.webmanifest"/>
      </Head>

      <Component {...pageProps}/>
    </Fragment>
  )
}

export default MyApp
