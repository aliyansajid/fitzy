import React from 'react'
import Image from 'next/image'

const Program = () => {
	return (
		<section className='mx-auto w-[1240px] mt-36 mb-36 space-y-16'>
			<div className='space-y-8 w-96'>
				<h2 className='text-white text-6xl font-bebas font-bold'>
					Discover our best workout program
				</h2>
				<p className='text-text text-base font-inter leading-[1.7] tracking-[-0.02]'>
					Be better and confident every day, our features support any program to shape your ideal body.
				</p>
			</div>
			<div className='flex space-x-8'>
				<div className='border-2 border-accent px-8 py-8 space-y-8 w-1/3'>
					<div className='flex space-x-8'>
						<div>
							<Image src="/muscle.jpg" alt="Muscle" width={640} height={408} className='w-28 h-28 object-cover'/>
						</div>
						<div className='space-y-2'>
							<p className='text-text text-base font-inter leading-[1.7] tracking-[-0.02]'>
								Weightlifting
							</p>
							<h3 className='text-white text-3xl font-bebas font-bold'>
								30 days stronger
							</h3>
							<div className='flex space-x-8'>
								<div className='flex space-x-2'>
									<Image src="/ranking.svg" alt="Ranking" width={24} height={25} />
									<p className='text-text text-base font-inter leading-[1.7] tracking-[-0.02]'>
										30 Days
									</p>
								</div>
							</div>
						</div>
					</div>
					<div>
						<p className='text-text text-base font-inter leading-[1.7] tracking-[-0.02]'>
							This is a workout that is suitable for those who want to become a bodybuilder, be strong every day.
						</p>
					</div>
					<div>
						<button className="w-full h-14 border-2 border-accent rounded-full text-white text-lg font-inter font-medium capitalize tracking-[-0.04]">
							Start workout
						</button>
					</div>
				</div>
				<div className='border-2 border-accent px-8 py-8 space-y-8 w-1/3'>
					<div className='flex space-x-8'>
						<div>
							<Image src="/running.jpg" alt="Running" width={640} height={427} className='w-28 h-28 object-cover'/>
						</div>
						<div className='space-y-2'>
							<p className='text-text text-base font-inter leading-[1.7] tracking-[-0.02]'>
								Cardio
							</p>
							<h3 className='text-white text-3xl font-bebas font-bold'>
								10KM Run
							</h3>
							<div className='flex space-x-8'>
								<div className='flex space-x-2'>
									<Image src="/ranking.svg" alt="Ranking" width={24} height={25} />
									<p className='text-text text-base font-inter leading-[1.7] tracking-[-0.02]'>
										45 Days
									</p>
								</div>
							</div>
						</div>
					</div>
					<div>
						<p className='text-text text-base font-inter leading-[1.7] tracking-[-0.02]'>
							You don't have to be a superhero to workout in. Saitama did it before becoming a super hero, starting now!
						</p>
					</div>
					<div>
						<button className="w-full h-14 border-2 border-accent rounded-full text-white text-lg font-inter font-medium capitalize tracking-[-0.04]">
							Start workout
						</button>
					</div>
				</div>
				<div className='border-2 border-accent px-8 py-8 space-y-8 w-1/3'>
					<div className='flex space-x-8'>
						<div>
							<Image src="/leg.webp" alt="" width={1988} height={1328} className='w-28 h-28 object-cover'/>
						</div>
						<div className='space-y-2'>
							<p className='text-text text-base font-inter leading-[1.7] tracking-[-0.02]'>
								Leg
							</p>
							<h3 className='text-white text-3xl font-bebas font-bold'>
								super saiya leg
							</h3>
							<div className='flex space-x-8'>
								<div className='flex space-x-2'>
									<Image src="/ranking.svg" alt="Ranking" width={24} height={25} />
									<p className='text-text text-base font-inter leading-[1.7] tracking-[-0.02]'>
										30 Days
									</p>
								</div>
							</div>
						</div>
					</div>
					<div>
						<p className='text-text text-base font-inter leading-[1.7] tracking-[-0.02]'>
							Have you seen Goku's feet? That's the end goal of this workout, but remember you're not going to be a super Saiyan.
						</p>
					</div>
					<div>
						<button className="w-full h-14 border-2 border-accent rounded-full text-white text-lg font-inter font-medium capitalize tracking-[-0.04]">
							Start workout
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Program