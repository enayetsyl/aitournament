import Navbar from "../components/Navbar";
import bgimage from "/tournamentbg.jpg";
import cardbg from "/tour2.jpg";
import player1 from "/player1.jpg";
import player2 from "/player2.jpg";
import player3 from "/player3.jpg";
import player4 from "/player4.jpg";
import logo1 from "/logo1.jpg";
import logo2 from "/logo2.jpg";
import logo3 from "/logo3.jpg";
import logo5 from "/logo5.jpg";
import logo6 from "/logo6.jpg";
import logo4 from "/logo4.png";

import { FaDiscord, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import CompetitorCard from "../components/CompetitorCard";
import StandingCard from "../components/StandingCard";






const Standing = () => {
  return (
    <div className=" ">
      <div style={{
        backgroundImage: `url(${bgimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
      className="">
      <Navbar/>

    </div>
      <div className="max-w-6xl mx-auto px-5  -mt-60 z-10 w-full">
        <div style={{
      backgroundImage: `url(${cardbg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      
    }}
   className="h-[300px]"
        >
           <div  className="bg-black  bg-clip-padding backdrop-filter bg-opacity-70 h-full" >
           <div className="flex justify-center items-center pt-20 flex-col  ">
              <img src='/tour3.jpg' alt="" className="w-40 h-32 object-cover"/>
              <p className="text-white text-lg pt-4 ">Manila masters Toronto 4v4</p>
              <div className="flex justify-center items-center gap-5">
                <p className="  text-blue-500 ">Toronto Canada</p>
                <p className="  text-blue-500 ">09 OCT 2018 14:35 PM</p>
              </div>
            </div>
           </div>
        </div>
        <div className="bg-gray-200 w-full h-[520px] md:h-[450px] lg:h-[410px] ">
            <div className="flex flex-col lg:flex-row  lg:justify-between items-center px-10 pt-12">
            <h1 className="text-5xl font-black text-black   text-center">FORTNITE</h1>
            <div className="flex justify-center  items-center gap-5 pt-5">
              <button className="w-40 h-12 flex justify-center items-center text-white bg-blue-500 font-bold">REGISTER</button>
              <button className="w-40 h-12 flex justify-center items-center text-white bg-black font-bold">PLACE TO STAY</button>
            </div>
            </div>
            <div className="py-5 px-10">
              <hr className="bg-black h-[2px]" />
            </div>
            {/* lower container div */}
            <div>
              {/* about section */}
              <div className="flex justify-center items-center gap-8 lg:justify-start px-10">
                <h1 className="font-bold text-black">ABOUT THE TOURNAMENT</h1>
                <div className="flex justify-center ice gap-3 text-black">
                  <Link to='www.facebook.com'>
                <FaFacebookF />
                  </Link>
                  <Link to='www.facebook.com'>
                <FaInstagram />
                  </Link>
                  <Link to='www.facebook.com'>
                <FaTwitter />
                  </Link>
                  <Link to='www.facebook.com'>
                  <FaDiscord />
                  </Link>
                </div>
              </div>
             <div className="flex flex-col lg:flex-row lg:items-start pt-10 ">
 {/* description */}
 <p className="text-center px-10 lg:text-start pb-10 lg:w-1/2">Prior to major incidents in the Overwatch League, there were known cases of controversial acts. His account was suspended twice for violating Blizzard's Terms Of Use.</p>
              {/* Lower part */}
              <div className="flex justify-center items-center gap-5 px-12 lg:w-1/2">
                <div>
                  <p className=" text-black font-bold text-sm">62 TEAMS</p>
                  <p className=" text-blue-900 text-base">ROUND ROBIN</p>
                </div>
                <div>
                  <p className=" text-black font-bold text-sm">2 GROUPS</p>
                  <p className=" text-blue-900 text-base">36 PLAYERS</p>
                </div>
                <div>
                  <p className=" text-black font-bold text-sm">PRIZE POOL</p>
                  <p className=" text-blue-900 text-base">$ 450 USD</p>
                </div>
                <div>
                  <p className=" text-black font-bold text-sm">PLAYOUT</p>
                  <p className=" text-blue-900 text-base">ROUND ROBIN</p>
                </div>
              </div>
             </div>
            </div>
        </div>
      </div>
      {/* competitor */}
      <div className="max-w-6xl mx-auto px-5">
        <h1 className="text-center text-3xl text-black pt-20">Meet the competitors</h1>
        <p className="text-black/80 text-center pb-10">and get hyped in a minute</p>
        {/* card grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <CompetitorCard
          teamName='Team Flawed Bot'
          player1={player1}
          player2={player2}
          player3={player3}
          player4={player4}
          location='SERBIA'
          />
          <CompetitorCard
          teamName='Wings Gaming'
          player1={player1}
          player2={player2}
          player3={player3}
          player4={player4}
          location='AUSTRALIA'
          />
          <CompetitorCard
          teamName='Invictus Gamin'
          player1={player1}
          player2={player2}
          player3={player3}
          player4={player4}
          location='FINLAND'
          />
          <CompetitorCard
          teamName='Fanatic eSports'
          player1={player1}
          player2={player2}
          player3={player3}
          player4={player4}
          location='DENMARK'
          />
          <CompetitorCard
          teamName='Gambit Gaming'
          player1={player1}
          player2={player2}
          player3={player3}
          player4={player4}
          location='AUSTRIA'
          />
          <CompetitorCard
          teamName='Fortuna eSports'
          player1={player1}
          player2={player2}
          player3={player3}
          player4={player4}
          location='NETHERLANDS'
          />
        </div>
      </div>
      {/* standings container */}
      <div className="bg-slate-800 mt-20 pb-32">
        <div className="max-w-6xl mx-auto px-5">
          <h1 className="text-white text-center text-4xl pt-14">View our Standings</h1>
          <p className="text-center text-blue-600 text-lg pb-32">Stay updated with all the statistic about the tournament</p>
          {/* card container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5
           ">
{/* group a */}
<div>
  <p className="bg-blue-500 text-white font-bold px-10 py-2">GROUP A</p>
  <div className="px-10 flex justify-between items-center bg-slate-950 py-5 mt-2">
    <p className=" text-white font-bold text-sm
    ">COMPETITOR</p>
    <div className="flex justify-start items-center gap-2">
    <p className=" text-white font-bold text-sm
    ">M</p>
    <p className=" text-white font-bold text-sm
    ">W</p>
    <p className=" text-white font-bold text-sm
    ">D</p>
    <p className=" text-white font-bold text-sm
    ">L</p>
    <p className=" text-white font-bold text-sm
    ">P</p>
    </div>
  </div>
  <StandingCard
  logo={logo1}
  name='Team Flawed Bot'
  rating={[46,23,1,22,123]}
  />
  <StandingCard
  logo={logo2}
  name='Wings Gaming'
  rating={[44,23,0,21,78]}
  />
  <StandingCard
  logo={logo3}
  name='Fanatic eSports'
  rating={[168,56,34,78,23]}
  />
  <StandingCard
  logo={logo4}
  name='Invictus Gaming'
  rating={[126,34,2,90,19]}
  />
  <StandingCard
  logo={logo5}
  name='Fortune eSports'
  rating={[12,0,9,3,3]}
  />
  <StandingCard
  logo={logo6}
  name='Gambit Gaming'
  rating={[31,23,2,6,2]}
  />
</div>
{/* group b */}
<div>
  <p className="bg-blue-500 text-white font-bold px-10 py-2">GROUP B</p>
  <div className="px-10 flex justify-between items-center bg-slate-950 py-5 mt-2">
    <p className=" text-white font-bold text-sm
    ">COMPETITOR</p>
    <div className="flex justify-start items-center gap-2">
    <p className=" text-white font-bold text-sm
    ">M</p>
    <p className=" text-white font-bold text-sm
    ">W</p>
    <p className=" text-white font-bold text-sm
    ">D</p>
    <p className=" text-white font-bold text-sm
    ">L</p>
    <p className=" text-white font-bold text-sm
    ">P</p>
    </div>
  </div>
  <StandingCard
  logo={logo1}
  name='Team Flawed Bot'
  rating={[46,23,1,22,123]}
  />
  <StandingCard
  logo={logo2}
  name='Wings Gaming'
  rating={[44,23,0,21,78]}
  />
  <StandingCard
  logo={logo3}
  name='Fanatic eSports'
  rating={[168,56,34,78,23]}
  />
  <StandingCard
  logo={logo4}
  name='Invictus Gaming'
  rating={[126,34,2,90,19]}
  />
  <StandingCard
  logo={logo5}
  name='Fortune eSports'
  rating={[12,0,9,3,3]}
  />
  <StandingCard
  logo={logo6}
  name='Gambit Gaming'
  rating={[31,23,2,6,2]}
  />
</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Standing