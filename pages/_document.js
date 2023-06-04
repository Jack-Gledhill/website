import Document, {Head, Html, Main, NextScript} from 'next/document';

export default class Doc extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8"/>

                    <meta rel="canonical" href="https://jackgledhill.com"/>
                    <meta property="og:url" content="https://jackgledhill.com"/>
                    <meta name="twitter:url" content="https://jackgledhill.com"/>

                    <meta property="og:site_name" content="Copyright (c) 2023 Jack Gledhill"/>
                    <meta property="og:type" content="website"/>

                    <meta property="og:image" content="/web-assets/favicon.png"/>
                    <meta property="twitter:image" content="/web-assets/favicon.png"/>
                    <meta property="twitter:card" content="summary"/>

                    <meta name="description"
                          content="I'm Jack Gledhill, an indie developer from Scarborough with a mission to help local businesses and sole traders get their feet off the ground with their very own website and bespoke software solutions!"/>
                    <meta property="og:description"
                          content="I'm Jack Gledhill, an indie developer from Scarborough with a mission to help local businesses and sole traders get their feet off the ground with their very own website and bespoke software solutions!"/>
                    <meta property="twitter:description"
                          content="I'm Jack Gledhill, an indie developer from Scarborough with a mission to help local businesses and sole traders get their feet off the ground with their very own website and bespoke software solutions!"/>

                    <meta name="theme-color" content="#1f6bcb"/>
                    <meta property="keywords" content="Jack Gledhill, indie developer, freelance developer, software engineer, web developer"/>

                    <link rel="icon" type="image/x-icon" href="/web-assets/favicon.png"/>
                    <link rel="shortcut icon" href="/web-assets/favicon.png"/>
                    <link rel="apple-touch-icon" sizes="180x180" href="/web-assets/favicon.png"/>

                    <script src="https://kit.fontawesome.com/f51a5992c4.js" crossOrigin="anonymous"/>
                    <script defer src="https://code.jquery.com/jquery-3.4.1.js"
                            integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
                            crossorigin="anonymous"/>
                </Head>

                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    };
}