const PlayerCard = ({ image, position, name, subtitle }) => {
  return (
    <div className="h-52   bg-slate-800 ">
      <div className="flex justify-between h-full  items-center ">
        <div className="w-1/2 h-full">
          <img src={image} alt="" className="w-full h-full object-center " />
        </div>
        <div className="w-1/2 h-full flex flex-col">
          <div className="flex-grow">
          <p className="bg-black px-2 py-1 inline-block  text-white text-sm mt-6">
            {position}
          </p>
          <h1 className="text-xl font-bold text-white  ">{name}</h1>
          <p className="text-sm text-white/70  pb-5">{subtitle}</p>
          </div>
          <button className="  bg-blue-500 py-3  px-10 text-white font-bold w-full">
            PROFILE{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
