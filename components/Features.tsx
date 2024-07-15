import Image from 'next/image'
import React from 'react'

const Features = () => {
	return (
		<section className='mx-auto w-[1240px] mt-36 mb-36 space-y-16'>
			<div className='flex flex-col items-center space-y-12'>
				<h2 className='text-white text-6xl font-bebas font-bold'>More cofident everyday</h2>
				<p className='text-text text-base font-inter leading-[1.7] tracking-[-0.02]'>
					Be better and confident every day, our features support any program to shape your ideal body.
				</p>
			</div>
			<div className='flex justify-between space-x-6'>
				<div className='w-96'>
					<div className='bg-secondary h-96 relative flex justify-center items-center border-b-0 border-2 border-accent'>
						<Image src="/tracker.svg" alt="Tracker" className='absolute top-14 left-12'/>
					</div>
					<div className='bg-primary px-10 py-10 space-y-6 border-2 border-accent z-30 relative'>
						<h3 className='text-white text-3xl font-bebas font-bold uppercase'>your workout tracker</h3>
						<p className='text-text text-base font-inter leading-[1.7] tracking-[-0.02em]'>
							Monitor how far you are doing your workout, you can see your progress in an app
						</p>
					</div>
				</div>
				<div className='w-96'>
					<div className='bg-secondary h-96 relative flex justify-center items-center border-b-0 border-2 border-accent'>
						<Image src="/tracker.svg" alt="Tracker" className='absolute top-14 left-12'/>
					</div>
					<div className='bg-primary px-10 py-10 space-y-6 border-2 border-accent z-10 relative'>
						<h3 className='text-white text-3xl font-bebas font-bold uppercase'>find the best workoout</h3>
						<p className='text-text text-base font-inter leading-[1.7] tracking-[-0.02em]'>
							Find a workout that's right for you every day, with lots of easy-to-learn video tutorials
						</p>
					</div>
				</div>
				<div className='w-96'>
					<div className='bg-secondary h-96 relative flex justify-center items-center border-b-0 border-2 border-accent'>
						<Image src="/tracker.svg" alt="Tracker" className='absolute top-14 left-12'/>
					</div>
					<div className='bg-primary px-10 py-10 space-y-6 border-2 border-accent z-30 relative'>
						<h3 className='text-white text-3xl font-bebas font-bold uppercase'>set your own goals</h3>
						<p className='text-text text-base font-inter leading-[1.7] tracking-[-0.02em]'>
							Set your own goals, do the routine every day, and consistently monitor the results for yourself.
						</p>
					</div>
				</div>
			</div>
		</section>
		
	)
}

export default Features