import React from 'react'
import Image from 'next/image'

const Footer = () => {
	return (
		<section className='mx-auto max-w-[1240px] pt-14 border-t-2 border-accent px-4 lg:px-0'>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-14 border-b-2 border-accent'>
				<div className='space-y-8'>
					<a href="/">
						<Image src="/logo.svg" alt="Logo" width={100} height={34} />
					</a>
					<p className='text-white text-base font-inter leading-[1.2] tracking-[-0.02]'>
						Be better every day, together stronger!
					</p>
				</div>
				<div className='space-y-8'>
					<h4 className='text-white text-lg font-inter font-medium leading-[1.5] tracking-[-0.02]'>
						Website
					</h4>
					<ul className='space-y-2'>
						<li>
							<a href="" className='text-text text-lg font-inter leading-[1.5] tracking-[-0.02]'>
								About Us
							</a>
						</li>
						<li>
							<a href="" className='text-text text-lg font-inter leading-[1.5] tracking-[-0.02]'>
								Programs
							</a>
						</li>
						<li>
							<a href="" className='text-text text-lg font-inter leading-[1.5] tracking-[-0.02]'>
								Community
							</a>
						</li>
						<li>
							<a href="" className='text-text text-lg font-inter leading-[1.5] tracking-[-0.02]'>
								Blog
							</a>
						</li>
					</ul>
				</div>
				<div className='space-y-8'>
					<h4 className='text-white text-lg font-inter font-medium leading-[1.5] tracking-[-0.02]'>
						Support
					</h4>
					<ul className='space-y-2'>
						<li>
							<a href="" className='text-text text-lg font-inter leading-[1.5] tracking-[-0.02]'>
								FAQ
							</a>
						</li>
						<li>
							<a href="" className='text-text text-lg font-inter leading-[1.5] tracking-[-0.02]'>
								Support Center
							</a>
						</li>
						<li>
							<a href="" className='text-text text-lg font-inter leading-[1.5] tracking-[-0.02]'>
								Contact Us
							</a>
						</li>
					</ul>
				</div>
				<div className='space-y-8'>
					<h4 className='text-white text-lg font-inter font-medium leading-[1.5] tracking-[-0.02]'>
						Partnership
					</h4>
					<ul className='space-y-2'>
						<li>
							<a href="" className='text-text text-lg font-inter leading-[1.5] tracking-[-0.02]'>
								Become a Partner
							</a>
						</li>
						<li>
							<a href="" className='text-text text-lg font-inter leading-[1.5] tracking-[-0.02]'>
								Our Partner
							</a>
						</li>
						<li>
							<a href="" className='text-text text-lg font-inter leading-[1.5] tracking-[-0.02]'>
								Affiliate Program
							</a>
						</li>
					</ul>
				</div>
				<div className='space-y-8'>
					<h4 className='text-white text-lg font-inter font-medium leading-[1.5] tracking-[-0.02]'>
						Misc.
					</h4>
					<ul className='space-y-2'>
						<li>
							<a href="" className='text-text text-lg font-inter leading-[1.5] tracking-[-0.02]'>
								Terms &amp; Conditions
							</a>
						</li>
						<li>
							<a href="" className='text-text text-lg font-inter leading-[1.5] tracking-[-0.02]'>
								Privacy Policy
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className='pt-4 pb-4'>
				<p className='text-text text-sm font-inter leading-[1.2] tracking-[-0.02] text-center lg:text-left'>
					© Aliyan Sajid. 2024. All rights reserved
				</p>
			</div>
		</section>
	)
}

export default Footer