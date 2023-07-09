"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import wordmark from "../../public/wordmark.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faEnvelope,
    faLocationDot
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    return (
        <>
            <DesktopNav />
            <MobileNav />
        </>
    );
}

function MobileNav() {
    const [open, setOpen] = React.useState(false);

    function toggleOpen() {
        if (open) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    }

    return (
        <div className="lg:hidden">
            <div className="p-4 grid grid-cols-3">
                <div></div>

                <div className="flex flex-row items-center justify-center">
                    <Image height={36} src={wordmark} alt="" />
                </div>

                <div className="flex flex-row justify-end items-center gap-8">
                    <button onClick={toggleOpen}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            </div>

            <div className={`${!open ? 'hidden' : ''} flex flex-col gap-4 p-4`}>
                <Link href="/" className="hover:underline hover:opacity-75">
                    Home
                </Link>

                <Link href="/about" className="hover:underline hover:opacity-75">
                    About Us
                </Link>

                <Link href="/pricing" className="hover:underline hover:opacity-75">
                    Pricing
                </Link>
            </div>
        </div>
    );
}

function DesktopNav() {
    return (
        <div className="hidden p-4 lg:grid grid-cols-5">
            <div className="col-span-2 flex flex-row items-center gap-8">
                <p>
                    <FontAwesomeIcon icon={faLocationDot} /> {process.env.NEXT_PUBLIC_CATCHMENT_AREA}
                </p>

                <p className="hover:underline">
                    <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_CONTACT}`}>
                        <FontAwesomeIcon icon={faEnvelope} /> {process.env.NEXT_PUBLIC_EMAIL_CONTACT}
                    </a>
                </p>
            </div>

            <div className="flex flex-row items-center justify-center">
                <Image height={36} src={wordmark} alt="" />
            </div>

            <div className="col-span-2 flex flex-row justify-end items-center gap-8">
                <Link href="/" className="hover:underline hover:opacity-75">
                    Home
                </Link>

                <Link href="/about" className="hover:underline hover:opacity-75">
                    About Us
                </Link>

                <Link href="/pricing" className="hover:underline hover:opacity-75">
                    Pricing
                </Link>
            </div>
        </div>
    );
}