import CTA from "../components/CTA";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Program from "../components/Program";
import Testimonials from "../components/Testimonials";

const page = () => {
    return (
		<div className="bg-primary">
			<Navbar />
			<Hero />
			<Features />
			<Program />
			<Testimonials />
			<CTA />
			<Footer />
		</div>
    )
}

export default page