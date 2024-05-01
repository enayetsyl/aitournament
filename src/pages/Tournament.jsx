import bgimage from "/tournamentbg.jpg";
import tour1 from "/tour1.png";
import tour2 from "/tour2.jpg";
import tour3 from "/tour3.jpg";
import tour4 from "/tour4.jpg";

import Navbar from "../components/Navbar";
import TournamentCard from "../components/TournamentCard";

const Tournament = () => {
  return (

  <div>
    {/* hero */}
      <div
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <Navbar />
      <div>
        <h1 className="pt-20 text-center pb-3 text-4xl text-white font-bold">
          Our tournaments
        </h1>
        <p className="text-white/70 text-center font-semibold">
          This is where you can browse through our tournaments
        </p>
      </div>
      <div className="flex justify-center items-center gap-1 pt-10">
        <span className="h-16 bg-blue-500  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 w-48 text-3xl text-white font-black flex justify-center items-center">
          FORTNITE
        </span>
        <div className=" bg-blue-500  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 px-5 py-2 text-lg text-white font-black flex justify-center items-center h-16 w-48 flex-col leading-5">
          <p>CALL-DUTY</p>
          <p>WWII</p>
        </div>
        <span className=" bg-blue-500  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 px-5 py-2 text-xl text-white flex justify-center items-center h-16 w-48">
          CSGO
        </span>
      </div>
    </div>
    {/* tournament card */}
    <div className="pt-5 px-20 lg-px-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
    <TournamentCard 
    cardbg={tour1}
    location='Manila masters Toronto 4v4'
    date='OCT.09.2018 - 02:35 PM'
    interval='FORTNITE'
    teamNumber='62'
    prize='450'
    />
    <TournamentCard 
    cardbg={tour2}
    location='EU WINNERS League - Starter Division'
    date='OCT.09.2018 - 02:35 PM'
    interval='FORTNITE'
    teamNumber='32'
    prize='300'
    />
    <TournamentCard 
    cardbg={tour3}
    location='ENDPOINTGG VS CEX ESPORTS [2]'
    date='OCT.09.2018 - 02:35 PM'
    interval='CS GO'
    teamNumber='22'
    prize='1000'
    />
    <TournamentCard 
    cardbg={tour4}
    location='TORNEO SPANISH PRO LEAGUE'
    date='OCT.09.2018 - 02:35 PM'
    interval='FORTNITE'
    teamNumber='62'
    prize='4500'
    />
    </div>
  </div>
  );
};

export default Tournament;
