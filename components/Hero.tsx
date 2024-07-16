import Image from 'next/image';
import React from 'react';

const Hero = () => {
	return (
		<section className='flex flex-col md:flex-row mx-auto w-full md:w-[1240px] mt-14 md:mt-36 px-4 md:px-0'>
			<div className='w-full md:w-3/5 space-y-8 md:space-y-12'>
				<h1 className='text-white text-5xl md:text-8xl font-bebas font-bold tracking-[-0.02]'>
					Be better everyday, starting today
				</h1>
				<p className='text-text text-sm md:text-base font-inter leading-[1.7] tracking-[-0.02]'>
					Live healthy from now on, don't waste your life lying down. Start your training with us, helping you in managing your diet and goals every day.
				</p>
				
				<div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8'>
					<button className="w-full md:w-44 h-14 bg-secondary rounded-full text-primary text-lg font-inter font-medium capitalize tracking-[-0.04]">
						Download app
					</button>
					<button className="w-full md:w-44 h-14 border-2 border-accent rounded-full text-white text-lg font-inter font-medium capitalize tracking-[-0.04]">
						Learn more
					</button>
				</div>
				
				<div className='flex space-x-16 justify-between lg:justify-normal'>
					<div className='space-y-3'>
						<h2 className='text-white text-3xl md:text-5xl font-bebas font-bold tracking-wide uppercase'>40k+</h2>
						<p className='text-text text-sm md:text-base font-inter leading-[1.7]'>Workout <br /> Programs</p>
					</div>
					<div className='space-y-3'>
						<h2 className='text-white text-3xl md:text-5xl font-bebas font-bold tracking-wide uppercase'>100k+</h2>
						<p className='text-text text-sm md:text-base font-inter leading-[1.7]'>Professional <br /> Trainer</p>
					</div>
					<div className='space-y-3'>
						<h2 className='text-white text-3xl md:text-5xl font-bebas font-bold tracking-wide uppercase'>2m+</h2>
						<p className='text-text text-sm md:text-base font-inter leading-[1.7]'>Users <br /> Worldwide</p>
					</div>
				</div>
			</div>
			
			<div className='w-full md:w-auto mt-14 md:mt-0'>
				<Image src="/hero-illustration.svg" alt="Illustration" width={661} height={716} className='mx-auto md:mx-0'/>
			</div>
		</section>
	);
}

export default Hero;