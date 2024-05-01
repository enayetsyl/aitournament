
const TournamentCard = ({cardbg, location, date, interval, teamNumber, prize }) => {
  return (
    <div style={{
      backgroundImage: `url(${cardbg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: '350px'
    }}
   
    >
      <div className='bg-clip-padding backdrop-filter bg-opacity-70 bg-black h-full w-full'>
        <p className='text-white/70 text-lg text-center pt-8'>{location}</p>
        <p className='text-white font-bold text-base text-center '>{date}</p>
        <h1 className='text-white font-bold text-2xl text-center pt-3'>{interval}</h1>
          <div className='flex justify-center items-center gap-8 pt-20'>
            <div>
              <p className='text-white/70 text-sm'>2 GROUPS</p>
              <p className='text-white font-bold'>{teamNumber} TEAMS</p>
            </div>
            <div>
              <p className='text-white/70 text-sm'>PLAYOUT</p>
              <p className='text-white font-bold'>ROUND ROBIN</p>
            </div>
            <div>
              <p className='text-white/70 text-sm'>PRIZE POOL</p>
              <p className='text-white font-bold'>${prize} USD</p>
            </div>

          </div>
           <div className='flex justify-center items-center pt-8'>
           <button className='font-bold text-white px-12 py-3 bg-blue-500 '>MORE DETAILS</button>
           </div>
      </div>
    </div>
  )
}

export default TournamentCard