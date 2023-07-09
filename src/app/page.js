"use client";

import Image from "next/image";

import Footer from "@/components/footer";
import Link from "@/components/link";
import Navbar from "@/components/navbar";

import avatar from "public/avatar.png";
import clientNooder from "public/client-nooder.png";
import clientStreamcord from "public/client-streamcord.png";
import clientUnify from "public/client-unify.png";
import portrait from "public/portrait.png";
import serviceBespoke from "public/service-bespoke.png";
import serviceDomain from "public/service-domain.png";
import serviceHosting from "public/service-hosting.png";
import serviceWeb from "public/service-web.png";
import testimonialMohammed from "public/testimonial-mohammed.png";
import testimonialNooder from "public/testimonial-nooder.jpg";
import testimonialOliver from "public/testimonial-oliver.png";

import {
    faGithub,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import {
    faChevronDown,
    faChevronRight,
    faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemState
} from "react-accessible-accordion";
import Slider from 'react-slick';

export default function Home() {
    return (
        <div>
            <Navbar />

            <div className="relative">
                <main className="pb-32 bg-hero-shapes">
                    <header>
                        <Image src={avatar} alt="" className="h-48 w-48 m-auto rounded-full" />

                        <div>
                            <h2>Jack's Software House</h2>
                            <h3>Freelance Developer & Software Engineer</h3>
                        </div>

                        <div className="px-4 py-2 space-x-8 inline-block rounded-full bg-decor-blue">
                            <a href="https://github.com/Jacks-Software-House" className="hover:opacity-50 text-2xl">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>

                            <a href="https://linkedin.com/in/jackgledhill/" className="hover:opacity-50 text-2xl">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>

                            <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_CONTACT}`} className="hover:opacity-50 text-2xl">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </a>
                        </div>
                    </header>
                </main>

                <Wave fill="#fff"/>
            </div>

            <section>
                <div className="md:grid md:grid-cols-5 md:gap-16">
                    <div className="md:col-span-3 space-y-4">
                        <h2>Meet Your Software Developer</h2>

                        <p>Hey there, I'm Jack and I run the show here at Jack's Software House. It's nice to meet you :)</p>

                        <p>I work with sole traders and small businesses around the {process.env.NEXT_PUBLIC_CATCHMENT_AREA} area who are looking to get the ball rolling on their side hustles and startup empires.</p>

                        <p>I've been designing and building software since 2018, and been a professional in the field since 2021. With relevant qualifications and experience in the wild, you can be sure I'm more than just some ambitious hobbyist!</p>

                        <p>If there's anything else you'd like to know, you can <Link href="/about">read more about me</Link>!</p>
                    </div>

                    <div className="hidden md:flex md:col-span-2 justify-center items-center">
                        <Image src={portrait} alt="" height={256} className="rounded-lg shadow-md border-4 border-blue" />
                    </div>
                </div>

                <hr />

                <h2 className="text-center">Services I Offer</h2>
                <div className="md:grid md:grid-cols-3 md:gap-16 space-y-12 md:space-y-0">
                    <div className="space-y-12">
                        <div className="flex justify-center">
                            <Image src={serviceWeb} alt="" height={128} className="rounded-full" />
                        </div>

                        <div className="space-y-4 text-center">
                            <p className="text-lg font-bold">Web Design & Development</p>
                            <p>My clients need their own online identity if they want to really get the ball rolling. Let me know what your requirements are, and I'll be sure to come up with something!</p>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div className="flex justify-center">
                            <Image src={serviceHosting} alt="" height={128} className="rounded-full" />
                        </div>

                        <div className="space-y-4 text-center">
                            <p className="text-lg font-bold">Web Hosting</p>
                            <p>For those of you with a website, I provide cheap, fully managed and comprehensive web hosting for a monthly fee.</p>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div className="flex justify-center">
                            <Image src={serviceDomain} alt="" height={128} className="rounded-full" />
                        </div>

                        <div className="space-y-4 text-center">
                            <p className="text-lg font-bold">Domain Management</p>
                            <p>You shouldn't spend your time registering and managing your domain name. Leave the hard part to me and work on building a business you can be proud of!</p>
                        </div>
                    </div>
                </div>

                <p>or how about...</p>

                <div className="md:grid md:grid-cols-3 md:gap-16">
                    <div></div>

                    <div className="space-y-12">
                        <div className="flex justify-center">
                            <Image src={serviceBespoke} alt="" height={128} className="rounded-full" />
                        </div>

                        <div className="space-y-4 text-center">
                            <p className="text-lg font-bold">Bespoke Software</p>
                            <p>Regardless of your size, there'll always be a use for a bespoke software system within your business. Whether it's for managing your stock, keeping track of employee hours, or something completely different, I've got you covered!</p>
                        </div>
                    </div>

                    <div></div>
                </div>

                <hr />

                <h2 className="text-center">My Satisfied Customers</h2>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-16">
                    <a href="https://streamcord.io" className="col-span-1">
                        <Image src={clientStreamcord} alt="" height={128} />
                    </a>

                    <a href="https://nooder.bot" className="col-span-1">
                        <Image src={clientNooder} alt="" height={128} />
                    </a>

                    <a href="https://unify.holdings" className="col-span-1">
                        <Image src={clientUnify} alt="" height={128} />
                    </a>
                </div>
            </section>

            <div className="bg-faq-gradient">
                <section className="space-y-8 text-center text-white py-16">
                    <h2>Frequently Asked Questions</h2>

                    <p>Got a question? No worries, I've got you covered. If you can't find the answer to your query, feel free to send me an email!</p>

                    <Accordion className="rounded-lg text-left text-blue-700 border border-grey-400 bg-white" allowZeroExpanded={true} allowMultipleExpanded={true}>
                        <AccordionItem className="border-b border-grey-400 space-y-4 p-4">
                            <AccordionHeader>
                                I'm a sole trader that's just starting out. Can you help me?
                            </AccordionHeader>

                            <AccordionItemPanel>
                                Absolutely! I love working with sole traders and individuals to help them get their feet off the ground. I can help you with everything from registering your domain name to building your website and hosting it - think of me as your own technical advisor!
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem className="border-b border-grey-400 space-y-4 p-4">
                            <AccordionHeader>
                                Can I contact you by phone?
                            </AccordionHeader>

                            <AccordionItemPanel>
                                Unfortunately, I'm very often unable to answer the phone, so this is not a reliable way to get in touch with me. Because of this, I don't publish my phone number online. If you'd like to speak to me, please send me an email and we can arrange a time to speak. Clients may be given my phone number for emergency contact purposes should they need it.
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem className="border-b border-grey-400 space-y-4 p-4">
                            <AccordionHeader>
                                How do I book a consultation with you?
                            </AccordionHeader>

                            <AccordionItemPanel>
                                Simple! Send me an email at <Link href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_CONTACT}`}>{process.env.NEXT_PUBLIC_EMAIL_CONTACT}</Link> and we can discuss a time and date for a meeting. Depending on my current workload and availability, there may be a waiting list - I'll make it clear that this is the case when we first speak. Should you wish to go forward with a consultation, the meeting will be help on Discord or Google Meet - you'll have the option to choose.
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem className="border-b border-grey-400 space-y-4 p-4">
                            <AccordionHeader>
                                Are there any contracts I'll need to sign?
                            </AccordionHeader>

                            <AccordionItemPanel>
                                In order to protect both you and myself, you will need to sign a contract before I can begin any work (including domain/hosting management). Most of the contract is boring legal jargon that only exists to make things clearer to the courts should a claim be made. However, if you are unhappy with any particular clause, you'll have the opportunity to negotiate this with me. You can read more about the contracts we use <Link href="/contracts">here</Link>.
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem className="border-b border-grey-400 space-y-4 p-4">
                            <AccordionHeader>
                                Do I have to pay a recurring fee for hosting and domain management?
                            </AccordionHeader>

                            <AccordionItemPanel>
                                Yes. Unfortunately, both the server company and domain registrar require a monthly or annual fee from me to keep your website online. The exact pricing of these depends on both your expected traffic and the domain name you choose (this is, unfortunately, out of my control). I'll make it clear the exact pricing of these before you commit to anything. This will also include a small service fee for my time, to keep everything under one easy-to-understand price.
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem className="space-y-4 p-4">
                            <AccordionHeader>
                                Can I pay for hosting and domain management monthly/annually?
                            </AccordionHeader>

                            <AccordionItemPanel>
                                Hosting is charged monthly, while domain management is charged annually. This is due to the nature of how hosting companies and domain registrars charge customers. You will need to pay the cost of the billing cycle upfront, and I will then manage the domain/hosting for you for the duration of the billing cycle.
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                </section>
            </div>

            <section className="text-center space-y-8">
                <h2>Testimonials</h2>

                <p>See what my clients have to say about the services I've provided them.</p>

                <Slider arrows={false} dots={true} infinite={false} speed={500} slidesToShow={1} slidesToScroll={1}>
                    <Testimonial authorSrc={testimonialNooder} authorName="Benjamin" authorTitle="CEO, Nooder Holdings">
                        "Jack provided me with his services very quickly and on time. He was fantastic to
                        work with!"
                    </Testimonial>

                    <Testimonial authorSrc={testimonialOliver} authorName="Oliver" authorTitle="CEO, Unify Holdings">
                        "Jack's services are good for what he charges. I will work with him again in the
                        future if I need another website."
                    </Testimonial>

                    <Testimonial authorSrc={testimonialMohammed} authorName="Mohammed" authorTitle="Twitch Streamer">
                        "Everything Jack has made for me works perfectly. He has completed all of my past
                        orders within a few days!"
                    </Testimonial>
                </Slider>
            </section>

            <div className="relative pb-24">
                <Wave fill="#13407a"/>
            </div>

            <footer className="pb-4 px-8 text-center">
                <div className="p-12 rounded-lg shadow-lg text-left text-blue-700 bg-white">
                    <div className="md:grid md:grid-cols-3 md:gap-8 space-y-4 md:space-y-0">
                        <div className="md:col-span-2 space-y-6">
                            <h2 className="text-center lg:text-left">Interested?</h2>
                            <p className="text-lg">Great news! Use the button to the right to send me an email, and I'll reply with a date and time for your <b>free</b> consultation.</p>
                        </div>

                        <div className="flex items-center justify-center text-center">
                            <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_CONTACT}`} className="p-4 rounded-lg shadow-lg text-white bg-blue hover:bg-blue-600 focus:bg-blue-600 border-2 border-blue focus:border-blue-300">
                                <FontAwesomeIcon icon={faEnvelope} /> Book my consultation
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

            <Footer />
        </div>
    );
}

function AccordionHeader({ children }) {
    return (
        <AccordionItemHeading className="font-bold">
            <AccordionItemState>
                {(state) => {
                    return (
                        <AccordionItemButton className="space-x-2">
                            {state.expanded ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronRight} />}
                            <span>{children}</span>
                        </AccordionItemButton>
                    )
                }}
            </AccordionItemState>
        </AccordionItemHeading>
    );
}

function Testimonial({ authorSrc, authorName, authorTitle, children }) {
    return (
        <div className="space-y-8">
            <Image src={authorSrc} alt="" height={128}  className="rounded-full mx-auto"/>

            <p className="text-xl">
                {children}
            </p>

            <div>
                <p className="text-lg font-bold">{authorName}</p>
                <p>{authorTitle}</p>
            </div>
        </div>
    );
}

function Wave({ fill }) {
    return (
        <svg className="absolute bottom-0 left-0 w-full" fill={fill} viewBox="0 0 1440 100"
             xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0,80L30,68.3C60,57,120,33,180,33.3C240,33,300,57,360,68.3C420,80,480,80,540,70C600,60,660,40,720,33.3C780,27,840,33,900,40C960,47,1020,53,1080,58.3C1140,63,1200,67,1260,56.7C1320,47,1380,23,1440,21.7C1500,20,1560,40,1620,40C1680,40,1740,20,1800,16.7C1860,13,1920,27,1980,35C2040,43,2100,47,2160,45C2220,43,2280,37,2340,40C2400,43,2460,57,2520,61.7C2580,67,2640,63,2700,61.7C2760,60,2820,60,2880,60C2940,60,3000,60,3060,55C3120,50,3180,40,3240,35C3300,30,3360,30,3420,35C3480,40,3540,50,3600,48.3C3660,47,3720,33,3780,28.3C3840,23,3900,27,3960,33.3C4020,40,4080,50,4140,60C4200,70,4260,80,4290,85L4320,90L4320,100L4290,100C4260,100,4200,100,4140,100C4080,100,4020,100,3960,100C3900,100,3840,100,3780,100C3720,100,3660,100,3600,100C3540,100,3480,100,3420,100C3360,100,3300,100,3240,100C3180,100,3120,100,3060,100C3000,100,2940,100,2880,100C2820,100,2760,100,2700,100C2640,100,2580,100,2520,100C2460,100,2400,100,2340,100C2280,100,2220,100,2160,100C2100,100,2040,100,1980,100C1920,100,1860,100,1800,100C1740,100,1680,100,1620,100C1560,100,1500,100,1440,100C1380,100,1320,100,1260,100C1200,100,1140,100,1080,100C1020,100,960,100,900,100C840,100,780,100,720,100C660,100,600,100,540,100C480,100,420,100,360,100C300,100,240,100,180,100C120,100,60,100,30,100L0,100Z"/>
        </svg>
    );
}
