import Link from "@/components/link";

import {
    faChevronLeft,
    faFilePdf
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DomainManagementAgreement() {
    return (
        <article>
            <Link href="/contracts">
                <FontAwesomeIcon icon={faChevronLeft} /> Back to all contracts
            </Link>

            <h2>Domain Management Agreement</h2>
            <p>This is a rolling annual contract that charges a flat fee for purchasing and managing a domain name of your choosing.</p>
            <button>
                <a href="/downloads/domain_management_agreement_draft.pdf" className="p-4 rounded-lg shadow-lg text-white bg-blue hover:bg-blue-600 focus:bg-blue-600 border-2 border-blue focus:border-blue-300">
                    <FontAwesomeIcon icon={faFilePdf} /> Download example contract
                </a>
            </button>

            <h3>Summary of Key Information</h3>
            <p>Here's a brief, layman summary of the most important points mentioned in the contract:</p>

            <h4>Termination</h4>
            <ul>
                <li>
                    <p>The contract stays in effect until terminated;</p>
                </li>

                <li>
                    <p>If either of us wants to terminate, we need to give at least 30 days' notice to the other;</p>
                </li>

                <li>
                    <p>No notice is needed to terminate the contract if we both agree to it;</p>
                </li>
            </ul>

            <h4>Payment</h4>
            <ul>
                <li>
                    <p>You'll be charged an annual fee, and pay annually;</p>
                </li>

                <li>
                    <p>Invoices are due when you receive them;</p>
                </li>

                <li>
                    <p>Any prices mentioned are VAT exclusive (because I am not VAT-registered, so there is no VAT charge);</p>
                </li>

                <li>
                    <p>If you don't pay invoices, they will accrue interest at a rate of 25% per year;</p>
                </li>
            </ul>

            <h4>Modification</h4>
            <ul>
                <li>
                    <p>The contract can only be changed if we both agree to it;</p>
                </li>
            </ul>

            <h4>Confidentiality</h4>
            <ul>
                <li>
                    <p>I will not disclose any personal or sensitive information about you;</p>
                </li>
            </ul>
        </article>
    );
}