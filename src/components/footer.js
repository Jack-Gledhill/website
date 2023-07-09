import Image from "next/image";
import Link from "next/link";

import wordmark from "../../public/wordmark.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer>
            <div className="grid md:grid-cols-4 gap-8">
                <div className="space-y-8">
                    <Image className="w-2/3" src={wordmark} alt="" />

                    <div className="space-x-6 text-3xl md:text-xl">
                        <a href="https://www.facebook.com/profile.php?id=100094510811897">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>

                        <a href="https://linkedin.com/in/jackgledhill/">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>

                        <a href="https://github.com/Jacks-Software-House">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>

                    <p className="text-xs">Copyright &copy; Jack's Software House, 2023</p>
                </div>

                <div>
                    <h6 className="leading-loose">Business Address</h6>
                    <p>{process.env.NEXT_PUBLIC_ADDRESS_COMPANY}</p>
                    <p>{process.env.NEXT_PUBLIC_ADDRESS_STREET}</p>
                    <p>{process.env.NEXT_PUBLIC_ADDRESS_CITY}</p>
                    <p>{process.env.NEXT_PUBLIC_ADDRESS_COUNTY}</p>
                    <p>{process.env.NEXT_PUBLIC_ADDRESS_POSTCODE}</p>
                </div>

                <div>
                    <h6 className="leading-loose">More about us</h6>
                    <p>
                        <Link href="/about" className="hover:underline hover:opacity-75">About Us</Link>
                    </p>
                    <p>
                        <Link href="/pricing" className="hover:underline hover:opacity-75">Pricing & Payments</Link>
                    </p>
                </div>

                <div>
                    <h6 className="leading-loose">Legal</h6>
                    <p>
                        <Link href="/tob" className="hover:underline hover:opacity-75">Terms of Business</Link>
                    </p>
                    <p>
                        <Link href="/contracts" className="hover:underline hover:opacity-75">Service Agreements</Link>
                    </p>
                    <p>
                        <Link href="/terms" className="hover:underline hover:opacity-75">Terms & Conditions</Link>
                    </p>
                    <p>
                        <Link href="/privacy" className="hover:underline hover:opacity-75">Privacy Policy</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}