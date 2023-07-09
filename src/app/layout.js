import { rubik } from './styles/fonts';
import './styles/globals.css';

import '@fortawesome/fontawesome-svg-core/styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata = {
    title: "Jack's Software House",
    description: 'I\'m Jack, an indie developer from Scarborough with a mission to help local businesses and sole traders get their feet off the ground with their very own website and bespoke software solutions!',
    url: 'https://jacksoftware.co.uk',
    authors: [{ name: "Jack's Software House", url: 'https://jacksoftware.co.uk' }],
    creator: "Jack's Software House",
    keywords: ["web design", "software developer", "freelance developer", "software house"],
    twitter: {
        card: 'summary_large_image',
        title: "Jack's Software House",
        description: 'I\'m Jack, an indie developer from Scarborough with a mission to help local businesses and sole traders get their feet off the ground with their very own website and bespoke software solutions!',
        // siteId: '1467726470533754880',
        // creator: '@nextjs',
        // creatorId: '1467726470533754880',
        images: ['https://jacksoftware.co.uk/avatar.png'],
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={rubik.className}>
                {children}
            </body>
        </html>
    )
}
