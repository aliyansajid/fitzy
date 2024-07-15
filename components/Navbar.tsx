import { navLinks } from "@/data";
import Image from "next/image";

const Navbar = () => {
	return (
		<section className="py-7 border-b-2 border-accent">
			<nav className="flex justify-between items-center mx-auto w-[1240px]">
				<Image src="/logo.svg" alt="Logo" />

				<ul className="flex space-x-12 text-white text-base font-inter font-semibold tracking-[-0.02]">
					{navLinks.map((link) => (
						<li key={link.name}>
							<a href={link.link}>{link.name}</a>
						</li>
					))}
				</ul>

				<button className="w-44 h-14 bg-secondary rounded-full text-primary text-lg font-inter font-medium tracking-[-0.04]">
					Start Workout
				</button>
			</nav>
		</section>
	);
};

export default Navbar;