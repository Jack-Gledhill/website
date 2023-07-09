import Link from "@/components/link";

export default function Contracts() {
    return (
        <article>
            <h2>Contracts</h2>
            <p>There's a variety of different contracts that a client might be asked to sign, it all depends on what they want. Generally, here are the four main contract templates that a client can expect to see:</p>
            <ul>
                <li>
                    <p><Link href="/contracts/service">Service Agreement</Link> - the main contract used when a client requests a website</p>
                </li>

                <li>
                    <p><Link href="/contracts/service_long">Service Agreement (Long Project)</Link> - just like the regular Service Agreement, but more suitable for longer projects, such as bespoke software solutions</p>
                </li>

                <li>
                    <p><Link href="/contracts/domain">Domain Management Agreement</Link> - a rolling annual contract given to clients who would like me to purchase and manage their domain name</p>
                </li>

                <li>
                    <p><Link href="/contracts/hosting">Web Hosting Agreement</Link> - a rolling monthly contract given to clients who want me to host their website or bespoke software for them</p>
                </li>
            </ul>
        </article>
    );
}