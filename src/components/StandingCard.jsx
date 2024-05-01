import React from 'react'

const StandingCard = ({logo, name, rating}) => {
  return (
    <div className="px-10 flex justify-between items-center bg-slate-950 py-5 mt-2 hover:-translate-y-0.5 transition-all duration-500 cursor-pointer">
   <div className='flex justify-center items-center gap-8'>
    <img src={logo} alt="" className='h-6 w-6' />
   <p className=" text-white font-bold text-sm
    ">{name}</p>
   </div>
    <div className="flex justify-start items-center gap-2 ">
      {
        rating.map((item, index) => <p className=" text-white  text-sm 
        "
        key={index}
        >{item}</p>)
      }
   
    </div>
  </div>
  )
}

export default StandingCard