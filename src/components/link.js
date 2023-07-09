import Link from "next/link";

export default function InLine({ children, href }) {
    return (
        <Link href={href} className="text-blue hover:underline hover:text-blue-400">
            {children}
        </Link>
    );
}