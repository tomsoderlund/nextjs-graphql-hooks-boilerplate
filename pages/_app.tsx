import React from 'react'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import { ApolloProvider } from '@apollo/client'
import Router from 'next/router'

import client from '../graphql/apollo'
import { googlePageview } from '../components/page/GoogleAnalytics'
import PageHead from '../components/page/PageHead'
import Footer from '../components/page/Footer'
import Notifications from '../components/page/Notifications'

import 'aether-css-framework/dist/aether.min.css'
import '../styles/globals.css'

Router.events.on('routeChangeComplete', path => googlePageview(path))

export default function App ({ Component, pageProps, router }: AppProps): React.ReactElement {
  // this.props (Server + Client): Component, err, pageProps, router
  return (
    <ApolloProvider client={client}>
      <PageHead {...pageProps} />
      <main>
        <Component
          {...pageProps}
          {...router}
        />
      </main>
      <Link href='/' className='button circle-menu-button'><img src='/icons/home.svg' alt='Home' /></Link>
      <Footer />
      <Notifications />
    </ApolloProvider>
  )
}
