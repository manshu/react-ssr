import React from 'react'
import Layout from './layout'
import { PageContextProvider } from './usePageContext'

function PageShell({ pageContext, children }) {
    return (
        <React.StrictMode>
            <PageContextProvider pageContext={pageContext}>
                <Layout>
                    {children}
                </Layout>
            </PageContextProvider>
        </React.StrictMode>
    )
}

export { PageShell }