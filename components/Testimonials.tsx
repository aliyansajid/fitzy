import React from 'react';
import Image from 'next/image'

const Testimonials = () => {
	return (
		<section className='mx-auto max-w-[1240px] mt-28 mb-28 md:mt-36 md:mb-36 space-y-14 md:space-y-16 px-4 lg:px-0' id='testimonials'>
			<div className='flex flex-col items-center space-y-8 md:space-y-12 text-center md:text-left'>
				<h2 className='text-white text-4xl md:text-6xl font-bebas font-bold'>
					Let&apos;s see what they say after joining our program
				</h2>
				<p className='text-text text-base font-inter leading-[1.7] tracking-[-0.02]'>
					Here you can see some success stories after joining our workout program.
				</p>
			</div>
		
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
				<div className='border-2 border-accent px-8 py-8 space-y-8'>
					<div className='space-y-2'>
						<div className='flex justify-between items-start'>
							<h3 className='text-white text-3xl font-bebas font-bold'>Best Program</h3>
							<Image src="/stars.svg" alt="Stars" width={152} height={24} />
						</div>
						<div>
							<p className='text-text text-base font-inter leading-[1.7] tracking-[-0.02]'>
								30 Day Stronger Program
							</p>
						</div>
					</div>
					<div>
						<p className='text-text text-base font-inter leading-[1.7] tracking-[-0.02]'>
							I've tried 3 to 4 previous programs outside the fitzy program, the results are not very satisfying. 
							After trying the program from fitzy, the results are very satisfying! Recommended!
						</p>
					</div>
					<div className='flex space-x-4'>
						<div>
							<Image src="/person1.jpg" alt="Person" width={640} height={960} className="w-16 h-16 object-cover"/>
						</div>
						<div>
							<h3 className='text-white text-2xl font-bebas font-bold'>Dwayne Thus</h3>
							<p className='text-text text-sm font-inter'>Body Builder</p>
						</div>
					</div>
				</div>
				<div className='border-2 border-accent px-8 py-8 space-y-8'>
					<div className='space-y-2'>
						<div className='flex justify-between items-start'>
							<h3 className='text-white text-3xl font-bebas font-bold'>Amazing!</h3>
							<Image src="/stars.svg" alt="Stars" width={152} height={24} />
						</div>
						<div>
							<p className='text-text text-base font-inter leading-[1.7] tracking-[-0.02]'>
								The Beginner Program
							</p>
						</div>
					</div>
					<div>
						<p className='text-text text-base font-inter leading-[1.7] tracking-[-0.02]'>
							I started my career as a boxing athlete after following the workout program from fitzy, I started 
							with what I thought was easy, and the results are now very satisfying!
						</p>
					</div>
					<div className='flex space-x-4'>
						<div>
							<Image src="/person1.jpg" alt="Person" width={640} height={960} className="w-16 h-16 object-cover"/>
						</div>
						<div>
							<h3 className='text-white text-2xl font-bebas font-bold'>Dianna Florie</h3>
							<p className='text-text text-sm font-inter'>Boxing Athlete</p>
						</div>
					</div>
				</div>
				<div className='border-2 border-accent px-8 py-8 space-y-8'>
					<div className='space-y-2'>
						<div className='flex justify-between items-start'>
							<h3 className='text-white text-3xl font-bebas font-bold'>So good!</h3>
							<Image src="/stars.svg" alt="Stars" width={152} height={24} />
						</div>
						<div>
							<p className='text-text text-base font-inter leading-[1.7] tracking-[-0.02]'>
								Super Saiya Leg Program
							</p>
						</div>
					</div>
					<div>
						<p className='text-text text-base font-inter leading-[1.7] tracking-[-0.02]'>
							I didn't expect the change to be so drastic like this! At first I was hesitant to join this program, 
							but will not know until I try. I'm very satisfied!
						</p>
					</div>
					<div className='flex space-x-4'>
						<div>
							<Image src="/person1.jpg" alt="Person" width={640} height={960} className="w-16 h-16 object-cover"/>
						</div>
						<div>
							<h3 className='text-white text-2xl font-bebas font-bold'>Jhonny Dogs</h3>
							<p className='text-text text-sm font-inter'>Runner</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Testimonials