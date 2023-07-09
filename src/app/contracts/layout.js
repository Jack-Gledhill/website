import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
    title: "Contracts | Jack's Software House"
}

export default function ContractsLayout({ children }) {
    return (
        <div>
            <Navbar />

            <main className="bg-hero-contracts py-24" style={{boxShadow: "0px 4px 4px 0px #00000040,inset 0 0 0 1000px rgba(0,0,0,.5)"}}>
                <header>
                    <h1>Service Agreements</h1>

                    <p className="text-lg">Contracts can not only be intimidating, but they can be confusing too. To help prevent any misunderstandings, here's a summary of the key information for each of the boilerplate contracts given to clients.</p>
                </header>
            </main>

            {children}

            <Footer />
        </div>
    )
}