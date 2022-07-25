import { FaBed, FaTaxi } from 'react-icons/fa';
import { MdFlight } from 'react-icons/md';
import { AiFillCar } from 'react-icons/ai';

function Category() {
  return (
    <div>
        <div className="container mx-auto pb-5">
            <div className="flex gap-7 text-white">
            <button className="flex items-center py-2 px-2 border text-sm gap-x-2 rounded-full">
                <FaBed size={18} />
                Stays
            </button>
            <button className="flex items-center py-2 px-2 active:border text-sm gap-x-2 rounded-full">
                <MdFlight size={18} className="rotate-90" />
                Flights
            </button>
            <button className="flex items-center py-2 px-2 active:border text-sm gap-x-2 rounded-full">
                <AiFillCar size={18} />
                Car rentals
            </button>
            <button className="flex items-center py-2 px-2 active:border text-sm gap-x-2 rounded-full">
                <FaBed size={18} />
                Attractions
            </button>
            <button className="flex items-center py-2 px-2 active:border text-sm gap-x-2 rounded-full">
                <FaTaxi size={18} />
                Airport taxis
            </button>
            </div>
        </div>
    </div>
  )
}

export default Category