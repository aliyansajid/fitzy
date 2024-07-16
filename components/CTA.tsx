import React from 'react'

const CTA = () => {
	return (
		<section className='mx-auto max-w-[1240px] mt-28 mb-28 md:mt-36 md:mb-36 px-4 lg:px-0' id='blog'>
			<div className='bg-secondary px-6 py-12 md:px-20 md:py-20 space-y-8 text-center md:text-left'>
				<h2 className='text-primary text-4xl md:text-6xl font-bebas font-bold'>
					Be more confident every day! Don't miss the chance get 50% discount!
				</h2>
				<button className="w-full md:w-44 h-14 bg-primary rounded-full text-white text-lg font-inter font-medium capitalize tracking-[-0.04]">
					Start Workout
				</button>
			</div>
		</section>
	)
}

export default CTA