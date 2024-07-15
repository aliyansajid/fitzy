import Image from 'next/image'
import React from 'react'

const Hero = () => {
	return (
		<section className='flex mx-auto w-[1240px] mt-36'>
			<div className='w-3/5 space-y-12'>
				<h1 className='text-white text-8xl font-bebas font-bold tracking-[-0.02]'>
					Be better everyday, starting today
				</h1>
				<p className='text-text text-base font-inter leading-[1.7] tracking-[-0.02]'>
					Live healthy from now on, don't waste your life lying down. Start your training 
					with us, helping you in managing your diet and goals every day.
				</p>
				<div className='space-x-8'>
					<button className="w-44 h-14 bg-secondary rounded-full text-primary text-lg font-inter font-medium capitalize tracking-[-0.04]">
						Download app
					</button>
					<button className="w-44 h-14 border-2 border-accent rounded-full text-white text-lg font-inter font-medium capitalize tracking-[-0.04]">
						learn more
					</button>
				</div>
				<div className='flex space-x-16'>
					<div className='space-y-3'>
						<h2 className='text-white text-5xl font-bebas font-bold tracking-wide uppercase'>40k+</h2>
						<p className='text-text text-base font-inter leading-[1.7]'>Workout <br/> Programs</p>
					</div>
					<div className='space-y-3'>
						<h2 className='text-white text-5xl font-bebas font-bold tracking-wide uppercase'>100k+</h2>
						<p className='text-text text-base font-inter leading-[1.7]'>Professional<br/>Trainer</p>
					</div>
					<div className='space-y-3'>
						<h2 className='text-white text-5xl font-bebas font-bold tracking-wide uppercase'>2m+</h2>
						<p className='text-text text-base font-inter leading-[1.7]'>Users<br/>Worldwide</p>
					</div>
				</div>
			</div>
			<div>
				<Image src="/hero-illustration.svg" alt="" />
			</div>
		</section>
	)
}

export default Hero
