import React from 'react'

const Navbar = () => {
  return (
    <main className='flex justify-center mt-[30px] '>
      <section className='w-[80%]'>
        <div className='flex justify-between bg-[#1E1E1E6E] rounded-[66px] border-[2px] border-[#373737] h-[82px] '>
          <h1 className='ml-[30px] my-auto text-[25px] font-medium '><span className='text-[#18388d]'>Lead</span>Votes</h1>
          <button className='bg-[#1B5CFE] rounded-[89px] h-[53px] my-auto text-[15px] leading-[22.5px] mr-[17px] font-medium  px-[25px] '>Connect wallet</button>
        </div>
      </section>

    </main>
  )
}

export default Navbar