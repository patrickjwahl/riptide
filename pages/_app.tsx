import '../styles/globals.scss'
import '../styles/swiper-overrides.css'
import { AppProps } from 'next/app';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

function App({ Component, pageProps }: AppPropsWithLayout) {

    const getLayout = Component.getLayout ?? ((page) => page);

    const ComponentWithLayout = getLayout(<Component {...pageProps} />);

    return (
        <ParallaxProvider>
            {ComponentWithLayout}
        </ParallaxProvider>
    )
}

export default App
