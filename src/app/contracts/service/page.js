import Link from "@/components/link";

import {
    faChevronLeft,
    faFilePdf
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ServiceAgreement() {
    return (
        <article>
            <Link href="/contracts">
                <FontAwesomeIcon icon={faChevronLeft} /> Back to all contracts
            </Link>

            <h2>Service Agreement</h2>
            <p>This is the main contract that all clients will sign when they request a website from us. It sets out the main provisions of the exchange, including details about payments, expenses, termination, IP rights and confidentiality.</p>
            <button>
                <a href="/downloads/service_agreement_draft.pdf" className="p-4 rounded-lg shadow-lg text-white bg-blue hover:bg-blue-600 focus:bg-blue-600 border-2 border-blue focus:border-blue-300">
                    <FontAwesomeIcon icon={faFilePdf} /> Download example contract
                </a>
            </button>

            <h3>Summary of Key Information</h3>
            <p>Here's a brief, layman summary of the most important points mentioned in the contract:</p>

            <h4>Termination</h4>
            <ul>
                <li>
                    <p>Unless either of us cancels, the contract remains in effect until the job is done;</p>
                </li>

                <li>
                    <p>If either of us wants to terminate, we need to give at least 2 weeks' notice to the other;</p>
                </li>

                <li>
                    <p>No notice is needed to terminate the contract if we both agree to it;</p>
                </li>
            </ul>

            <h4>Payment</h4>
            <ul>
                <li>
                    <p>You'll be charged a deposit before I begin working (this will be 25% of the total flat fee);</p>
                </li>

                <li>
                    <p>The remaining 75% will be paid once the job is finished;</p>
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

            <h4>Expenses</h4>
            <ul>
                <li>
                    <p>I can charge you for any software or expenses I need to cover in order to complete the job;</p>
                </li>
            </ul>

            <h4>IP Rights</h4>
            <ul>
                <li>
                    <p>The intellectual property rights of anything I make under this contract belong to me;</p>
                </li>

                <li>
                    <p>When the job is done, you're granted a license to use the intellectual property;</p>
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