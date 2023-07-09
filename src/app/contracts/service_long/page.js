import Link from "@/components/link";

import {
    faChevronLeft,
    faFilePdf
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ServiceLong() {
    return (
        <article>
            <Link href="/contracts">
                <FontAwesomeIcon icon={faChevronLeft} /> Back to all contracts
            </Link>

            <h2>Service Agreement (Long Project)</h2>
            <p>This is almost identical to the regular <Link href="/contracts/service">Service Agreement</Link>, except it has an extra clause that allows me to take 25% of the payment approximately half-way through the project (more specifically, when the Minimum Viable Product is complete).</p>
            <p>The Minimum Viable Product (or MVP), is a form of the product that is <b>functionally</b> complete, but lacks style, decoration, ease-of-use, and aesthetic. Unless you have a particularly large project (and are thus subject to this contract), you will likely never see the Minimum Viable Product.</p>
            <p>If you're under this contract, you will be given the opportunity to review and approve the MVP when it is ready. Past approval, no more work will continue until the 25% payment is given (I will invoice you after you've approved it).</p>
            <button>
                <a href="/downloads/long_project_service_agreement_draft.pdf" className="p-4 rounded-lg shadow-lg text-white bg-blue hover:bg-blue-600 focus:bg-blue-600 border-2 border-blue focus:border-blue-300">
                    <FontAwesomeIcon icon={faFilePdf} /> Download example contract
                </a>
            </button>
        </article>
    );
}