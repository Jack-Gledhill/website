import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Privacy() {
    return (
        <div>
            <Navbar />

            <article>
                <h1>Privacy Policy</h1>
                <p>Effective date: 7th day of July, 2023</p>
                <p>{process.env.NEXT_PUBLIC_URL} (the "Site") is owned and operated by Jack's Software House. Jack's Software
                    House is the data controller and can be contacted at:</p>
                <p>{process.env.NEXT_PUBLIC_EMAIL_LEGAL} <br />
                    {process.env.NEXT_PUBLIC_ADDRESS_SHORT}</p>

                <h2>Purpose</h2>
                <p>The purpose of this privacy policy (this "Privacy Policy") is to inform users of our Site of the
                    following:</p>
                <ol>
                    <li>
                        <p>The personal data we will collect;</p>
                    </li>

                    <li>
                        <p>Use of collected data;</p>
                    </li>

                    <li>
                        <p>Who has access to the data collected;</p>
                    </li>

                    <li>
                        <p>The rights of Site users; and</p>
                    </li>

                    <li>
                        <p>The Site's cookie policy.</p>
                    </li>
                </ol>
                <p>This Privacy Policy applies in addition to the terms and conditions of our Site.</p>

                <h2>GDPR</h2>
                <p>For users in the European Union, we adhere to the Regulation (EU) 2016/679 of the European
                    Parliament and of the Council of 27 April 2016, known as the General Data Protection Regulation
                    (the "GDPR"). For users in the United Kingdom, we adhere to the GDPR as enshrined in the Data
                    Protection Act 2018.</p>
                <p>We have not appointed a Data Protection Officer as we do not fall within the categories of
                    controllers and processors required to appoint a Data Protection Officer under Article 37 of the
                    GDPR.</p>

                <h2>Consent</h2>
                <p>By using our Site users agree that they consent to:</p>
                <ol>
                    <li>
                        <p>The conditions set out in this Privacy Policy.</p>
                    </li>
                </ol>

                <h2>Legal Basis for Processing</h2>
                <p>We collect and process personal data about users in the EU only when we have a legal basis for
                    doing so under Article 6 of the GDPR.</p>
                <p>We rely on the following legal basis to collect and process the personal data of users in the EU:</p>
                <ol>
                    <li>
                        <p>Processing of user personal data is necessary for us to take, at the request of a user, steps
                            before entering a contract or for the performance of a contract to which a user is a party. If a
                            user does not provide the the personal data necessary to perform a contract the consequences
                            are as follows: Services will not be rendered.</p>
                    </li>
                </ol>

                <h2>How We Use Personal Data</h2>
                <p>Data collected on our Site will only be used for the purposes specified in this Privacy Policy or
                    indicated on the relevant pages of our Site. We will not use your data beyond what we disclose in
                    this Privacy Policy.</p>

                <h2>Who We Share Personal Data With</h2>
                <h3>Employees</h3>
                <p>We may disclose user data to any member of our organisation who reasonably needs access to user
                    data to achieve the purposes set out in this Privacy Policy.</p>

                <h3>Other Disclosures</h3>
                <p>We will not sell or share your data with other third parties, except in the following cases:</p>
                <ol>
                    <li>
                        <p>If the law requires it;</p>
                    </li>

                    <li>
                        <p>If it is required for any legal proceeding;</p>
                    </li>

                    <li>
                        <p>To prove or protect our legal rights; and</p>
                    </li>

                    <li>
                        <p>To buyers or potential buyers of this company in the event that we seek to sell the company.</p>
                    </li>
                </ol>
                <p>If you follow hyperlinks from our Site to another Site, please note that we are not responsible for
                    and have no control over their privacy policies and practices.</p>

                <h2>How Long We Store Personal Data</h2>
                <p>User data will be stored until the purpose the data was collected for has been achieved.</p>
                <p>You will be notified if your data is kept for longer than this period.</p>

                <h2>How We Protect Your Personal Data</h2>
                <p>In order to protect your security, we use the strongest available browser encryption and store all of
                    our data on servers in secure facilities.</p>
                <p>While we take all reasonable precautions to ensure that user data is secure and that users are
                    protected, there always remains the risk of harm. The Internet as a whole can be insecure at times
                    and therefore we are unable to guarantee the security of user data beyond what is reasonably
                    practical.</p>

                <h2>Your Rights as a User</h2>
                <p>Under the GDPR, you have the following rights:</p>
                <ol>
                    <li>
                        <p>Right to be informed;</p>
                    </li>

                    <li>
                        <p>Right of access;</p>
                    </li>

                    <li>
                        <p>Right to rectification;</p>
                    </li>

                    <li>
                        <p>Right to erasure;</p>
                    </li>

                    <li>
                        <p>Right to restrict processing;</p>
                    </li>

                    <li>
                        <p>Right to data portability; and</p>
                    </li>

                    <li>
                        <p>Right to object.</p>
                    </li>
                </ol>

                <h2>Children</h2>
                <p>We do not knowingly collect or use personal data from children under 16 years of age. If we learn
                    that we have collected personal data from a child under 16 years of age, the personal data will be
                    deleted as soon as possible. If a child under 16 years of age has provided us with personal data their
                    parent or guardian may contact our privacy officer.</p>

                <h2>How to Access, Modify, Delete, or Challenge the Data Collected</h2>
                <p>If you would like to know if we have collected your personal data, how we have used your personal
                    data, if we have disclosed your personal data and to who we disclosed your personal data, if you
                    would like your data to be deleted or modified in any way, or if you would like to exercise any of
                    your other rights under the GDPR, please contact our privacy officer here:</p>
                <p>Jack Gledhill <br />
                    {process.env.NEXT_PUBLIC_EMAIL_LEGAL} <br />
                    {process.env.NEXT_PUBLIC_ADDRESS_SHORT}</p>

                <h2>Cookie Policy</h2>
                <p>A cookie is a small file, stored on a user's hard drive by a website. Its purpose is to collect data
                    relating to the user's browsing habits. You can choose to be notified each time a cookie is
                    transmitted. You can also choose to disable cookies entirely in your internet browser, but this may
                    decrease the quality of your user experience.</p>
                <p>We use the following types of cookies on our Site:</p>
                <ol>
                    <li>
                        <p><b>Functional cookies</b></p>
                        <p>Functional cookies are used to remember the selections you make on our Site so that your
                            selections are saved for your next visits; and</p>
                    </li>

                    <li>
                        <p><b>Analytical cookies</b></p>
                        <p>Analytical cookies allow us to improve the design and functionality of our Site by collecting
                            data on how you access our Site, for example data on the content you access, how long you
                            stay on our Site, etc.</p>
                    </li>
                </ol>

                <h2>Modifications</h2>
                <p>This Privacy Policy may be amended from time to time in order to maintain compliance with the
                    law and to reflect any changes to our data collection process. When we amend this Privacy Policy
                    we will update the "Effective Date" at the top of this Privacy Policy. We recommend that our users
                    periodically review our Privacy Policy to ensure that they are notified of any updates. If necessary,
                    we may notify users by email of changes to this Privacy Policy.</p>

                <h2>Complaints</h2>
                <p>If you have any complaints about how we process your personal data, please contact us through the
                    contact methods listed in the <i>Contact Information section</i> so that we can, where possible, resolve the
                    issue. If you feel we have not addressed your concern in a satisfactory manner you may contact a
                    supervisory authority. You also have the right to directly make a complaint to a supervisory
                    authority. You can lodge a complaint with a supervisory authority by contacting the Information
                    Commissioner's Office in the UK, Data Protection Commission in Ireland.</p>

                <h2>Contact Information</h2>
                <p>If you have any questions, concerns or complaints, you can contact our privacy officer, Jack
                    Gledhill, at:</p>
                <p>{process.env.NEXT_PUBLIC_EMAIL_LEGAL} <br />
                    {process.env.NEXT_PUBLIC_ADDRESS_SHORT}</p>
            </article>

            <Footer />
        </div>
    );
}