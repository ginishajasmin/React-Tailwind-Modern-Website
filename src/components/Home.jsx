import React from 'react'

const Home = () => {
  return (
    <section className='container mx-auto pt-44 flex flex-col md:flex-row justify-between items-center pb-6 px-4 sm:px-6 lg:px-8'>

        {/* Left Col */}
        <div className='w-full md:w-1/2 space-y-8'>
            ⭐ Welcome to Our Modern Website ⭐
        </div>

        {/* Right Col */}
        <div className='w-full md:w-1/2'>
            Right Column
        </div>

    </section>
  )
}

export default Home
