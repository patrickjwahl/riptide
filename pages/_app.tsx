import '../styles/globals.scss'
import '../styles/swiper-overrides.css'
import { AppProps } from 'next/app';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import Layout from '../components/layout';

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

function App({ Component, pageProps }: AppPropsWithLayout) {

    const getLayout = Component.getLayout ?? ((page: ReactElement) => {
        return (
            <Layout containsHero={false}>
                {page}
            </Layout>
        )
    });

    const ComponentWithLayout = getLayout(<Component {...pageProps} />);

    return (
        <ParallaxProvider>
            {ComponentWithLayout}
        </ParallaxProvider>
    )
}

export default App
