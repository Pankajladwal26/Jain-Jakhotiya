import React from 'react'

const Profile = () => {
  return (
    <div className='text-white relative p-6 pt-24 pb-12'>
      <div className="pt-4 flex gap-4 flex-wrap justify-evenly items-center xl:flex-row mt-[10%]">
          <div className='flex flex-col items-center justify-center gap-12 max-md:order-2'>
              <h1 className='relative h1 text-center text-discover font-bold text-6xl max-sm:text-5xl leading-4rem z-20 text-shadow-glow'>Hello Pankaj Singh</h1>
            <div className='flex flex-col items-center text-center justify-center'>
              <span className=''>This is your profile page. You can see the progress you've </span>
              <span className=''>made with your work and manage your projects or assigned tasks</span>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Profile
