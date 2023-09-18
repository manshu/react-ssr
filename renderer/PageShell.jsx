import React from 'react'
import Layout from './layout'
import Header from './layout/Header'
import Footer from './layout/Footer'
import './assets/tailwind.css'
import { PageContextProvider } from './usePageContext'

function PageShell({ pageContext, children }) {
    return (
        <React.StrictMode>
            <PageContextProvider pageContext={pageContext}>
                <Layout>
                    <Header />
                    {children}
                    <Footer />
                </Layout>
            </PageContextProvider>
        </React.StrictMode>
    )
}

export { PageShell }