import Navbar from "../components/Navbar";
import bgimage from "/tournamentbg.jpg";
import cardbg from "/tour4.jpg";
import cardbg1 from "/tour3.jpg";
import cardbg2 from "/tour2.jpg";
import logo1 from "/logo1.jpg";
import logo2 from "/logo2.jpg";
import logo3 from "/logo3.jpg";
import { Link } from "react-router-dom";
import { FaDiscord, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import PlayerCard from "../components/PlayerCard";
import player1 from "/player4.png";
import player2 from "/player5.png";
import player3 from "/player6.png";
import player4 from "/player7.png";
import StreamCard from "../components/StreamCard";

const Teams = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
        className=""
      >
        <Navbar />
      </div>
      {/* Overlap card */}
      <div className="max-w-6xl mx-auto px-5  -mt-96 z-10 w-full">
        <div
          style={{
            backgroundImage: `url(${cardbg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="h-[300px] lg:h-[500px]"
        >
          <div className="bg-black  bg-clip-padding backdrop-filter bg-opacity-70 h-full"></div>
        </div>
        <div className="bg-gray-200 w-full  ">
          <div className="flex flex-col lg:flex-row gap-2 lg:justify-between items-center px-10 pt-12">
            <div className="flex flex-col lg:flex-row  justify-center lg:items-start  lg:gap-10">
              <h1 className="text-5xl font-black text-black   text-center">
                FORTNITE
              </h1>
              <div className="flex justify-center flex-col items-center">
                <h1 className="font-bold text-black text-xl">
                  Team Flawed Bot
                </h1>
                <p className="text-black ">Founded 11 Oct 2018</p>
              </div>
            </div>
            <div className="flex justify-center  items-center gap-16 pt-5">
              <div>
                <h1 className="font-bold text-black text-xl">454</h1>
                <p className="text-black text-xs pb-5 text-center ">WIN</p>
              </div>
              <div>
                <h1 className="font-bold text-black text-xl">673</h1>
                <p className="text-black text-xs pb-5 text-center ">LOSES</p>
              </div>
              <div>
                <h1 className="font-bold text-black text-xl">68</h1>
                <p className="text-black text-xs pb-5 text-center ">TIE</p>
              </div>
            </div>
          </div>
          <div className="py-5 px-10">
            <hr className="bg-black h-[2px]" />
          </div>
          {/* lower container div */}
          <div>
            {/* about section */}
            <div className="flex justify-center items-center gap-8 lg:justify-start px-10">
              <h1 className="font-bold text-black">ABOUT THE TEAM</h1>
              <div className="flex justify-center ice gap-3 text-black">
                <Link to="www.facebook.com">
                  <FaFacebookF />
                </Link>
                <Link to="www.facebook.com">
                  <FaInstagram />
                </Link>
                <Link to="www.facebook.com">
                  <FaTwitter />
                </Link>
                <Link to="www.facebook.com">
                  <FaDiscord />
                </Link>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start py-10 ">
              {/* description */}
              <p className="text-center px-10 lg:text-start pb-10 lg:w-1/2">
                Prior to major incidents in the Overwatch League, there were
                known cases of controversial acts. His account was suspended
                twice for violating Blizzard's Terms Of Use.
              </p>
              {/* Lower part */}
              <div className="flex justify-around items-center  px-12 lg:w-1/2">
                <img src={logo1} alt="" className="h-20 w-20" />
                <img src={logo2} alt="" className="h-20 w-20" />
                <img src={logo3} alt="" className="h-20 w-20" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* roster */}
      <div className="max-w-6xl mx-auto px-5">
        <h1 className="text-center text-5xl text-black pt-20 ">
          Meet the Roster
        </h1>
        <p className="text-black/80 text-center pb-10">
          Our roster our pride all on one place
        </p>
        <div className="flex justify-center  items-center pb-10">
          <button className="w-52 h-12 flex justify-center items-center text-white bg-blue-500 font-bold">
            BECOME A PLAYER
          </button>
        </div>
        {/* player card container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto px-5 gap-5">
          <PlayerCard
            image={player1}
            position="RIFFLER"
            name="Zenim Deniro"
            subtitle="Ultramenix"
          />
          <PlayerCard
            image={player2}
            position="RIFFLER"
            name="Zenim Deniro"
            subtitle="Ultramenix"
          />
          <PlayerCard
            image={player4}
            position="RIFFLER"
            name="Zenim Deniro"
            subtitle="Ultramenix"
          />
          <PlayerCard
            image={player4}
            position="RIFFLER"
            name="Zenim Deniro"
            subtitle="Ultramenix"
          />
          <PlayerCard
            image={player3}
            position="RIFFLER"
            name="Zenim Deniro"
            subtitle="Ultramenix"
          />
          <PlayerCard
            image={player2}
            position="RIFFLER"
            name="Zenim Deniro"
            subtitle="Ultramenix"
          />
        </div>
      </div>
      {/* stream */}
      <div className="max-w-6xl mx-auto px-5">
        <h1 className="text-center text-5xl text-black pt-20 ">
          View all streams
        </h1>
        <p className="text-black/80 text-center pb-10">
          and get hyped in a minute
        </p>
        {/* card container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-10">
          <StreamCard
            status="ONLINE"
            name="FILIP MRAVIC"
            subtitle="BLOCKBUSTER SKIN UNLOCKED"
            image={cardbg}
          />
          <StreamCard
            status="ONLINE"
            name="BORIS WICH"
            subtitle="LCK Summer: HLE vs. BBQ - MVP vs. GRF"
            image={cardbg1}
          />
          <StreamCard
            status="OFFLINE"
            name="ALEX"
            subtitle="Mythic Argus with 2nd Split"
            image={cardbg2}
          />
        </div>
      </div>
    </div>
  );
};

export default Teams;
