import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Pricing() {
    return (
        <div>
            <Navbar />

            <main className="bg-hero-pricing py-24" style={{boxShadow: "0px 4px 4px 0px #00000040,inset 0 0 0 1000px rgba(0,0,0,.5)"}}>
                <header>
                    <h1>Pricing & Payments</h1>

                    <p className="text-lg">It's the last thing you want to think about, but knowing what and how you will pay is important to deciding whether I'm the right fit for you.</p>
                </header>
            </main>

            <article>
                <h2>Rates & Fees</h2>
                <div className="grid md:grid-cols-2 gap-6 md:gap-0">
                    <div className="space-y-4 md:pr-8 md:border-r md:border-grey-300">
                        <h3>Quotes & Service Costs</h3>

                        <p>Once you've had your consultation with me and given me a detailed rundown of what you're expecting, I will get back to you with a quote for the cost of your project if you decide to go forward. This quote is made using the best knowledge I have about your project, the length of time the project requires, and the complexity & challenge of the project.</p>

                        <p>Projects are billed in this way, instead of billing for hours spent, because initial time estimates made at the beginning of the project are rarely ever the same as the actual hours spent. No client wants to pay their deposit then get invoiced for more than they were expecting!</p>

                        <p>As such, once a price is agreed between me and you, that price will stay fixed throughout the project unless a change is agreed between us in writing.</p>

                        <p>In general, if you're looking for a simple website that advertises your new startup, the figures below should serve as a good estimate for what your quote might look like:</p>

                        <div>
                            <h3>£200*</h3>
                            <p>*average cost of a simple landing website</p>
                        </div>
                    </div>

                    <div className="space-y-4 md:pl-8 md:border-l md:border-grey-300">
                        <h3>Domain Registration & Hosting</h3>

                        <p>Domain registration and hosting services are billed on an annual and monthly basis, respectively. To keep things simple, the price I give you not only includes the maintenance costs on my end but also covers service and management costs. For transparency, service fees & maintenance costs may be split across multiple line items in invoices.</p>

                        <h4>Domains</h4>

                        <p>For example, if I handle a domain name for you, the full price will not only include the cost charged to me by the domain registrar, but will also cover the cost for me to manage that domain name for you, including all the necessary technical details. This will <b>always</b> be billed annually (because of how domain registrars bill their customers).</p>

                        <div>
                            <h4>
                                £10/year* <span className="text-lg">+ registration costs**</span>
                            </h4>
                            <p>*service fee for managing a domain name</p>
                            <p>**the exact pricing of this depends on what the domain registrars decide the cost of your domain is</p>
                        </div>

                        <h4>Hosting</h4>

                        <p>Hosting is much more simple. Currently, most clients will be charged a standard fee given below that covers both service fees and maintenance costs. However, a different figure may be given to clients who require certain software that must be bought, or clients who have a demanding level of user traffic.</p>

                        <div>
                            <h4>
                                £5/month*
                            </h4>
                            <p>*standard hosting rate, including service fee</p>
                        </div>
                    </div>
                </div>

                <hr />

                <h2>Payment & Deposits</h2>
                <p>When you decide to go through with a project, we will first agree a payment plan. This can sometimes differ between clients, but below is an example of what a typical payment plan might look like.</p>
                <p>By the time you've agreed to the quoted price, all business between us will be conducted subject to the <a href="/tob" className="text-blue hover:underline hover:opacity-75">general Terms of Business</a> and any relevant contract signed by us.</p>

                <h3>Deposit</h3>
                <p>Once a quote has been given and you've agreed to it, you'll be invoiced for 25% of the quote before work begins. When the project is complete, this 25% will be deducted from the final price (i.e. you'll pay the other 75%).</p>
                <p>Under normal circumstances, this deposit is non-refundable. However, I may issue a refund under extenuating circumstances, at my sole discretion.</p>

                <h3>Partial Payment (for longer projects)</h3>
                <p>If your project is a particularly long one, it's likely I'll require a further 25% of the quoted price approximately half-way through the project's completion - we'll agree to the details of this before the deposit is paid. Again, this 25% will be deducted from your final payment on completion of the project. The same limitations on refunds for the deposit also apply to this payment.</p>

                <h3>Final Payment</h3>
                <p>Once the project has been completed and approved by you, you will be invoiced for the outstanding balance of your quoted price. If you require hosting or domain registration, that will also be set up and invoiced after the project has been completed.</p>
            </article>

            <Footer />
        </div>
    );
}