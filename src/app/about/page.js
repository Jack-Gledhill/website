import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function About() {
    return (
        <div>
            <Navbar />

            <main className="py-24 bg-hero-about" style={{boxShadow: "0px 4px 4px 0px #00000040,inset 0 0 0 1000px rgba(0,0,0,.5)"}}>
                <header>
                    <h1>About Us</h1>

                    <p className="text-lg">Having an idea is great, but it takes dedication to pull the trigger and make it reality. While I can't do that for you, hopefully this page takes away some of the stress in deciding whether I'm the right fit for you and your business.</p>
                </header>
            </main>

            <article>
                <h2>Getting to Know Each Other</h2>

                <p>Much like many of my clients, I am a HMRC-registered Sole Trader. However, I'm not VAT registered, so I don't charge VAT for any of my services. More importantly, it means I'm not a faceless corporation - I'm a real person, like so many of my clients! As a result, we'll get to know each other as we go through our dealings.</p>

                <p>The first step to getting the ball rolling on your project would be to contact me via email and ask for a time slot for a consultation - it helps if you provide a brief description of what your general needs are when enquiring about a consultation! During the consultation, we'll discuss the ins and outs of your project, what you need and how you need it doing. Once I have enough information to get started, we'll then discuss the nitty gritty like payments, pricing, expected completion dates and any extra information I may need from you.</p>

                <h2>Qualifications & Experience</h2>

                <p>I began my career in 2018 when I took an interest in the Python programming language. Since then I've studied Computer Science at GCSE and A-Level and am currently on track to begin studying for a Master's degree in Software Engineering in September, 2023.</p>

                <p>I've been working in the field since 2021. Since then, I've worked for serveral companies and freelancers across the US, UK, France, and Australia!</p>
            </article>

            <Footer />
        </div>
    );
}