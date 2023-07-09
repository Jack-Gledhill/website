import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Terms() {
    return (
        <div>
            <Navbar />

            <article>
                <h1>Terms & Conditions</h1>
                <p>Effective date: 7th day of July, 2023</p>
                <p>These terms and conditions (the "Terms and Conditions") govern the use of {process.env.NEXT_PUBLIC_URL} (the "Site"). This Site is owned and operated by Jack's Software House.</p>
                <p>By using this Site, you indicate that you have read and understand these Terms and Conditions and agree to abide by them at all times.</p>
                <p>THESE TERMS AND CONDITIONS CONTAIN A DISPUTE RESOLUTION CLAUSE THAT IMPACTS YOUR RIGHTS ABOUT HOW TO RESOLVE DISPUTES. PLEASE READ IT CAREFULLY.</p>

                <h2>Intellectual Property</h2>
                <p>All content published and made available on our Site is the property of Jack's Software House and the Site's creators. This includes, but is not limited to images, text, logos, documents, downloadable files and anything that contributes to the composition of our Site.</p>

                <h2>Acceptable Use</h2>
                <p>As a user of our Site, you agree to use our Site legally, not to use our Site for illegal purposes, and not to:</p>
                <ul>
                    <li>
                        <p>Harass or mistreat other users of our Site;</p>
                    </li>

                    <li>
                        <p>Violate the rights of other users of our Site;</p>
                    </li>

                    <li>
                        <p>Violate the intellectual property rights of the Site owners or any third party to the Site;</p>
                    </li>

                    <li>
                        <p>Act in any way that could be considered fraudulent; or</p>
                    </li>

                    <li>
                        <p>Post any material that may be deemed inappropriate or offensive.</p>
                    </li>
                </ul>
                <p>If we believe you are using our Site illegally or in a manner that violates these Terms and Conditions, we reserve the right to limit, suspend or terminate your access to our Site. We also reserve the right to take any legal steps necessary to prevent you from accessing our Site.</p>

                <h2>Links to Other Websites</h2>
                <p>Our Site contains links to third party websites or services that we do not own or control. We are not responsible for the content, policies, or practices of any third party website or service linked to on our Site. It is your responsibility to read the terms and conditions and privacy policies of these third party websites before using these sites.</p>

                <h2>Limitation of Liability</h2>
                <p>Jack's Software House and our directors, officers, agents, employees, subsidiaries, and affiliates will not be liable for any actions, claims, losses, damages, liabilities and expenses including legal fees from your use of the Site.</p>

                <h2>Indemnity</h2>
                <p>Except where prohibited by law, by using this Site you indemnify and hold harmless Jack's Software House and our directors, officers, agents, employees, subsidiaries, and affiliates from any actions, claims, losses, damages, liabilities and expenses including legal fees arising out of your use of our Site or your violation of these Terms and Conditions.</p>

                <h2>Applicable Law</h2>
                <p>These Terms and Conditions are governed by the laws of the Country of England.</p>

                <h2>Dispute Resolution</h2>
                <p>Subject to any exceptions specified in these Terms and Conditions, if you and Jack's Software House are unable to resolve any dispute through informal discussion, then you and Jack's Software House agree to submit the issue first before a non-binding mediator and to an arbitrator in the event that mediation fails. The decision of the arbitrator will be final and binding. Any mediator or arbitrator must be a neutral party acceptable to both you and Jack's Software House. The costs of any mediation or arbitration will be paid by the unsuccessful party.</p>
                <p>Notwithstanding any other provision in these Terms and Conditions, you and Jack's Software House agree that you both retain the right to bring an action in small claims court and to bring an action for injunctive relief or intellectual property infringement.</p>

                <h2>Severability</h2>
                <p>If at any time any of the provisions set forth in these Terms and Conditions are found to be inconsistent or invalid under applicable laws, those provisions will be deemed void and will be removed from these Terms and Conditions. All other provisions will not be affected by the removal and the rest of these Terms and Conditions will still be considered valid.</p>

                <h2>Changes</h2>
                <p>These Terms and Conditions may be amended from time to time in order to maintain compliance with the law and to reflect any changes to the way we operate our Site and the way we expect users to behave on our Site. We will notify users by email of changes to these Terms and Conditions or post a notice on our Site.</p>

                <h2>Contact Details</h2>
                <p>Please contact us if you have any questions or concerns. Our contact details are as follows:</p>
                <p>Jack's Software House <br />
                    {process.env.NEXT_PUBLIC_EMAIL_LEGAL} <br />
                    {process.env.NEXT_PUBLIC_ADDRESS_SHORT}</p>
            </article>

            <Footer />
        </div>
    );
}