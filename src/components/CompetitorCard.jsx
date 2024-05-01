import { FaArrowRightLong } from 'react-icons/fa6'

const CompetitorCard = ({player1, player2, player3, player4, location, teamName}) => {
  return (
    <div className='h-60 bg-slate-800 relative'>
      <div className='flex justify-center items-center flex-col '>
          <h1 className='text-xl text-white text-center pt-5'>{teamName}</h1>
          <p className='text-sm text-white/70 text-center pb-5'>FORTNITE</p>
          <div className='flex justify-center items-center gap-2'>
            <img src={player1} alt="" className='rounded-full h-10 w-10 object-cover' />
            <img src={player2} alt="" className='rounded-full h-10 w-10 object-cover' />
            <img src={player3} alt="" className='rounded-full h-10 w-10 object-cover' />
            <img src={player4} alt="" className='rounded-full h-10 w-10 object-cover' />
          </div>
      </div>
      <div className='bg-slate-950 flex justify-between items-center absolute bottom-0 w-full h-14'>
        <div className='pl-5 py-2'>
          <p className='text-sm text-white/70'>FROM</p>
          <p className='text-base text-white -mt-1 font-bold'>{location}</p>
        </div>
          <button className='bg-blue-500  h-full px-10 text-white font-bold flex justify-center items-center gap-5'>TEAM PAGE <FaArrowRightLong /></button>
      </div>
    </div>
  )
}

export default CompetitorCard