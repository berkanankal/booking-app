import { FaBed, FaCalendarAlt } from 'react-icons/fa';
import { IoIosMan } from 'react-icons/io';
import { Link } from "react-router-dom";

function Search() {
  return (
    <div className="container mx-auto relative top-7" >
        <div className="flex bg-white border border-yellow-600 border-2 py-2 text-gray-400 rounded-md items-center justify-around">
            <button className="flex items-center gap-x-2">
                <FaBed size={20} />
                <span className="tracking-tight">Where are you going?</span>
            </button>
            <button className="flex items-center gap-x-2">
                <FaCalendarAlt size={20} />
                <span className="tracking-tight">04/22/2022 to 04/22/2022</span>
            </button>
            <button className="flex items-center gap-x-2">
                <IoIosMan size={22} />
                <span className="tracking-tight">1 adult - 0 children - 1 room</span>
            </button>
            <Link to="/hotels">
                <button  className="bg-blue-700 text-white border rounded-sm py-2 px-3 tracking-tight">
                    Search
                </button>
            </Link>
            {/* <button  className="bg-blue-700 text-white border rounded-sm py-2 px-3 tracking-tight">
                Search
            </button> */}
        </div>
    </div>
  )
}

export default Search