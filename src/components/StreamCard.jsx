import { FaEye, FaPlay } from "react-icons/fa"


const StreamCard = ({image, status, name, subtitle}) => {
  return (
    <div  style={{
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "250px",
    }}
    className="min-w-[400px] mx-auto"
    >
      <div className="bg-black bg-clip-padding backdrop-filter bg-opacity-70  h-full w-full">
        <div className="flex justify-end items-center p-5 text-white gap-2 text-base font-semibold ">
        <FaEye />
        <h1 >{status}</h1>
        </div>
          <div className="text-white flex justify-center items-center my-10">
          <FaPlay />
          </div>
        <div className="p-5 ">
        <h1 className="  text-white font-bold text-lg">{name}</h1>
        <p className="  text-blue-500  text-sm">{subtitle}</p>

        </div>
      </div>
    </div>
  )
}

export default StreamCard