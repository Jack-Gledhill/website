import React, {Component} from 'react';
import Head from 'next/head';

import Accordion from '../components/accordion';
import Navbar from "../components/navbar";
import Separator from "../components/separator";
import {
    CenterTitle,
    LeftTitle
} from "../components/title";
import Wave from '../components/wave';

import Slider from 'react-slick';

export default class Index extends Component {
    render() {
        return (
            <div className="relative min-h-full h-auto text-blue-700 bg-grey-600">
                <Head>
                    <title>Indie Developer Jack Gledhill</title>
                    <meta property="og:title" content="Indie Developer Jack Gledhill"/>
                    <meta property="twitter:title" content="Indie Developer Jack Gledhill"/>

                    <meta name="description"
                          content="I'm Jack Gledhill, an indie developer from Scarborough with a mission to help local businesses and sole traders get their feet off the ground with their very own website and bespoke software solutions!"/>
                    <meta property="og:description"
                          content="I'm Jack Gledhill, an indie developer from Scarborough with a mission to help local businesses and sole traders get their feet off the ground with their very own website and bespoke software solutions!"/>
                    <meta property="twitter:description"
                          content="I'm Jack Gledhill, an indie developer from Scarborough with a mission to help local businesses and sole traders get their feet off the ground with their very own website and bespoke software solutions!"/>
                </Head>

                <Navbar />

                <div className="relative">
                    <div className="pb-32 bg-center bg-no-repeat bg-cover hero-light">
                        <div className="container container-small py-16 px-8 lg:px-0 text-white text-center">
                            <img className="m-auto rounded-full" width={256} src="/web-assets/portrait.png" alt=""/>

                            <div className="mt-8">
                                <div className="space-y-8">
                                    <div>
                                        <p className="block text-5xl">
                                            <span className="font-bold">Jack</span> <span
                                            className="font-extralight">Gledhill</span>
                                        </p>
                                        <p className="block font-semibold text-3xl">Indie Developer & Software Engineer</p>
                                    </div>

                                    <div
                                        className="inline-block rounded-full text-white bg-decor-blue px-4 py-2 space-x-8">
                                        <a href="https://github.com/Jack-Gledhill"
                                           className="hover:opacity-50 text-2xl">
                                            <i className="fab fa-github"></i>
                                        </a>

                                        <a href="https://linkedin.com/in/jackgledhill/"
                                           className="hover:opacity-50 text-2xl">
                                            <i className="fab fa-linkedin"></i>
                                        </a>

                                        <a href="mailto:me@jackgledhill.com"
                                           className="hover:opacity-50 text-2xl">
                                            <i className="fas fa-envelope"></i>
                                        </a>
                                    </div>

                                    <div>
                                        <a className="rounded-lg p-4 bg-white text-blue hover:bg-grey-300"
                                           href="/downloads/cv.pdf">
                                            <i className="fas fa-file-pdf"></i> Download my CV
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Wave fill="#ffffff"/>
                </div>

                <div className="relative space-y-16 bg-white pt-20">
                    <div className="container space-y-16">
                        <div>
                            <div className="md:grid md:grid-cols-5 md:gap-16">
                                <div className="md:col-span-3 space-y-4">
                                    <LeftTitle>Meet Your Software Developer</LeftTitle>
                                    <p>Hey there, I'm Jack. It's nice to meet you :)</p>
                                    <p>I've been designing and building software since 2018, and been a professional in the field since 2021. With relevant qualifications and experience in the wild, you can be sure I'm more than just some ambitious hobbyist!</p>
                                    <p>Whether you're a small and local business, or just a sole trader looking to get your side hustle going, we can work together to create the perfect image for you and your business.</p>
                                </div>

                                <div className="hidden md:flex md:col-span-2 justify-center items-center">
                                    <img className="h-56 rounded-lg shadow-md border-4 border-blue"
                                         src="/web-assets/portrait.png" alt=""/>
                                </div>
                            </div>
                        </div>

                        <Separator />

                        <CenterTitle>Services I Offer</CenterTitle>

                        <div className="md:grid md:grid-cols-3 md:gap-16 space-y-12 md:space-y-0">
                            <div className="space-y-12">
                                <div className="flex justify-center">
                                    <img className="h-32 rounded-full" src="/web-assets/service-web.png" />
                                </div>

                                <div className="space-y-4 text-center">
                                    <p className="text-lg font-bold">Web Design & Development</p>
                                    <p>My clients need their own online identity if they want to really get the ball rolling. Let me know what your requirements are, and I'll be sure to come up with something!</p>
                                </div>
                            </div>

                            <div className="space-y-12">
                                <div className="flex justify-center">
                                    <img className="h-32 rounded-full" src="/web-assets/service-hosting.png" />
                                </div>

                                <div className="space-y-4 text-center">
                                    <p className="text-lg font-bold">Web Hosting</p>
                                    <p>Whether made by me or in-house, I provide cheap and comprehensive web hosting for a monthly fee.</p>
                                </div>
                            </div>

                            <div className="space-y-12">
                                <div className="flex justify-center">
                                    <img className="h-32 rounded-full" src="/web-assets/service-domain.png" />
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
                                    <img className="h-32 rounded-full" src="/web-assets/service-bespoke.png" />
                                </div>

                                <div className="space-y-4 text-center">
                                    <p className="text-lg font-bold">Bespoke Software</p>
                                    <p>Regardless of your size, there'll always be a use for a bespoke software system within your business. Whether it's for managing your stock, keeping track of employee hours, or something completely different, I've got you covered!</p>
                                </div>
                            </div>

                            <div></div>
                        </div>
                    </div>

                    <Separator />

                    <div className="container container-small">
                        <CenterTitle>Businesses I've Worked With</CenterTitle>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-16">
                            <a href="https://streamcord.io" className="col-span-1">
                                <img src="/web-assets/streamcord.png" className="max-h-12"/>
                            </a>

                            <a href="https://nooder.bot" className="col-span-1">
                                <img src="/web-assets/nooder.png" className="max-h-12"/>
                            </a>

                            <a href="https://digitalzest.co.uk" className="col-span-1">
                                <img src="/web-assets/digitalzest.jpg" className="max-h-12"/>
                            </a>
                        </div>
                    </div>

                    <div className="bg-blue pb-48">
                        <div className="container container-small text-center text-white py-16">
                            <p className="font-bold text-5xl mb-8">Frequently Asked Questions</p>
                            <p>
                                Got a question? No worries, I've got you covered. If you can't find the answer to your query, feel free to send me an email!
                            </p>
                        </div>
                    </div>

                    <div className="container container-small">
                        <Accordion items={{
                            "Who do you provide services to?": "Most of my clients and small businesses and individuals. I specialise in helping these clients get their feet off the ground and start their online presence. However, don't let it put you off if you think you're not the right fit! Send me an email and we can discuss the details :)",
                            "How do I book a consultation with you?": "Simple! Send me an email at me@jackgledhill.com and we can discuss a time and date for a meeting. Depending on my current workload and availability, there may be a waiting list - I'll make it clear that this is the case when we first speak. I'm based in the United Kingdom, therefore all quoted times will be in GMT/BST, unless otherwise stated. Should you wish to go forward with a consultation, the meeting will be help on Discord or Google Meet - you'll have the option to choose.",
                            "How much do you charge for your services?": "That depends! Every client is different, and thus every client has different requirements. I'll be able to give you a quote after our consultation, and I'll make it clear what is and isn't included in the price. I'll also make it clear if there are any recurring fees, such as hosting and domain management.",
                            "Is bespoke software more expensive than website design?": "By its very nature, yes. This is because bespoke software is, generally, a lot more work. Unlike websites where the barebones system is the same, bespoke software is built completely from scratch. As a result, it requires careful planning, frequent communication between me and the client, and a lot of testing. I'll give you a quote after our consultation, and it'll be made clear what this price includes.",
                            "Do I have to pay a recurring fee for hosting and domain management?": "Yes. Unfortunately, both the server company and domain registrar require a monthly or annual fee from me to keep your website online. The exact pricing of these depends on both your expected traffic and the domain name you choose (this is, unfortunately, out of my control). I'll make it clear the exact pricing of these before you commit to anything, this will also include a small service fee for my time.",
                            "Can I pay for hosting and domain management monthly/annually?": "Hosting can be paid either monthly or annually, while domain management is charged annually. This is due to the nature of how domain registrars charge customers. You will need to pay the cost of the billing cycle upfront, and I will then manage the domain/hosting for you for the duration of the billing cycle.",
                        }} style={{marginTop: "-17rem"}} />
                    </div>

                    <div className="container container-small text-center space-y-8">
                        <CenterTitle>Testimonials</CenterTitle>

                        <p>
                            See what my clients have to say about the services I've provided them.
                        </p>

                        <Slider dots={true} infinite={false} speed={500} slidesToShow={1} slidesToScroll={1}>
                            <div className="space-y-8">
                                <img src="/web-assets/nooder-circle.jpg" className="rounded-full mx-auto h-20 w-20"/>

                                <p className="text-xl">
                                    "Jack provided me with his services very quickly and on time. He was fantastic to
                                    work with!"
                                </p>

                                <p>
                                    <p className="text-lg font-bold">Benjamin</p>
                                    <p>CEO, Nooder Holdings</p>
                                </p>
                            </div>

                            <div className="space-y-8">
                                <img src="/web-assets/oliver.png" className="rounded-full mx-auto h-20 w-20"/>

                                <p className="text-xl">
                                    "Jack's services are good for what he charges. I will work with him again in the
                                    future if I need another website."
                                </p>

                                <p>
                                    <p className="text-lg font-bold">Oliver</p>
                                    <p>CEO, Unify Holdings</p>
                                </p>
                            </div>

                            <div className="space-y-8">
                                <img src="/web-assets/mohammed.png" className="rounded-full mx-auto h-20 w-20"/>

                                <p className="text-xl">
                                    "Everything Jack has made for me works perfectly. He has completed all of my past
                                    orders within a few days!"
                                </p>

                                <p>
                                    <p className="text-lg font-bold">Mohammed</p>
                                    <p>Twitch Streamer</p>
                                </p>
                            </div>
                        </Slider>
                    </div>

                    <div className="relative pb-24 lg:pb-40">
                        <Wave fill="#1f6bcb"/>
                    </div>
                </div>

                <div className="w-full">
                    <div className="pb-4 text-center bg-blue text-white bg-no-repeat">
                        <div className="container py-16">
                            <div className="rounded-lg shadow-lg p-12 text-blue-700 bg-white text-left text-lg">
                                <div className="md:grid md:grid-cols-3 md:gap-8 space-y-4 md:space-y-0">
                                    <div className="md:col-span-2 space-y-6">
                                        <p className="text-5xl font-bold text-center lg:text-left">Interested?</p>
                                        <p className="text-lg">Great news! Use the button to the right to send me an email, and I'll reply with a date and time for your <b>free</b> consultation.</p>
                                    </div>

                                    <div className="flex items-center justify-center text-center">
                                        <a href="mailto:me@jackgledhill.com" className="rounded-lg p-4 shadow-lg text-white bg-blue hover:bg-blue-600 focus:bg-blue-600 border-2 border-blue focus:border-blue-300">
                                            <i className="fas fa-envelope"></i> Book my consultation
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}