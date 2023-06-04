import Head from 'next/head';

import '../styles/globals.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Website({Component, pageProps}) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <script defer src="https://kit.fontawesome.com/f51a5992c4.js" crossorigin="anonymous"></script>
            </Head>

            <Component {...pageProps} />

            <style jsx global>{`
                body {
                    height: 100%;
                    font-family: 'Rubik';
                }
                
                * {
                    outline: none !important;
                    transition: 0.1s ease-in-out;
                }

                /* Normal button */
                .slick-dots li button:before {
                    font-size: 1rem;
                    opacity: 1;
                    color: #a1a1aa;
                    transition: 0.1s ease-in-out;
                }

                /* When selected */
                .slick-dots li.slick-active button:before {
                    color: #1f6bcb;
                }

                /* When hovered */
                .slick-dots li button:hover:before, .slick-dots li button:focus:before {
                    color: #1956a2;
                }
                
                .container {
                    max-width: 1200px !important;
                    padding-left: 2rem;
                    padding-right: 2rem;
                }
                
                .container-small {
                    max-width: 800px !important;
                    width: 100%;
                }

                @media (min-width: 1024px) {
                    .container {
                        padding-left: 0;
                        padding-right: 0;
                    }
                }
                
                @keyframes upAndDown {
                    0% {
                        transform: translateY(0);
                    } 50% {
                        transform: translateY(-0.75rem);
                    } 100% {
                        transform: translateY(0);
                    }
                }
            `}</style>
        </>
    );
}

export default Website;