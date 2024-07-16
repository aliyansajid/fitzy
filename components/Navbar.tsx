"use client";
import { navLinks } from "@/data";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<section className="relative py-7 border-b-2 border-accent">
			<nav className="flex justify-between items-center mx-auto max-w-[1240px] px-4 lg:px-0">
				<a href="/">
					<Image src="/logo.svg" alt="Logo" width={100} height={34} />
				</a>

				<div className="lg:hidden">
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="text-white"
					>
						{isOpen ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="2"
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="2"
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M4 6h16M4 12h16m-7 6h7"
								/>
							</svg>
						)}
					</button>
				</div>

				<ul
					className={`${
						isOpen ? "block w-full mt-0" : "hidden"
					} lg:flex lg:space-x-12 text-white text-base font-inter font-semibold tracking-[-0.02] absolute left-0 top-full bg-secondary lg:bg-transparent lg:static`}
					style={{ top: '100%' }}
				>
					{navLinks.map((link) => (
						<li key={link.name} className="py-2 lg:py-0 px-4 lg:px-0">
							<a href={link.link}>{link.name}</a>
						</li>
					))}
				</ul>

				<button className="hidden lg:block w-44 h-14 bg-secondary rounded-full text-primary text-lg font-inter font-medium tracking-[-0.04]">
					Start Workout
				</button>
			</nav>
		</section>
	);
};

export default Navbar;