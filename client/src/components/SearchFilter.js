import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
// import { DateRangePicker } from 'react-date-range';
import { DateRange } from 'react-date-range';
import { format } from "date-fns";
import { useState} from 'react';

function SearchFilter() {
  function showCalendar() {
    document.querySelector('.calendar').classList.toggle('active');
  }

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);



  return (
    <div className='container mx-auto'>
      <div className="flex flex-col pl-3 pt-2 pb-2 pr-3 gap-y-2 bg-yellow-500 border rounded-lg">
        <h1 className='text-gray-600 font-bold text-lg'>Search</h1>
          <div className='flex flex-col gap-y-1'>
            <h2 className='text-xs text-slate-900'>Destination</h2>
            <input type="text" className='h-8 pl-1' />
          </div>
          <div className='flex flex-col gap-y-1'>
            <h2 className='text-xs text-slate-900'>Check-in Date</h2>
            {/* <input type="text" className='h-8' /> */}
            <span onClick={showCalendar} className="h-8 bg-white pl-1 pt-1">
              {
                `${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`
              }
            </span> 
            <DateRange
              className='calendar'
              minDate={new Date()}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
            />
          </div>
          <h2 className='text-xs text-slate-900'>Options</h2>
          <div className='flex flex-col gap-y-2 p-3'>
            <div className='flex flex-row justify-between'>
              <h3 className='text-xs text-slate-600'>Min price per night</h3>
              <input type="number" className='w-1/5 pl-1 border-black border-[1px]' />
            </div>
            <div className='flex flex-row justify-between'>
              <h3 className='text-xs text-slate-600'>Max price per night</h3>
              <input type="number" className='w-1/5 pl-1 border-black border-[1px]' />
            </div>
            <div className='flex flex-row justify-between'>
              <h3 className='text-xs text-slate-600'>Adult</h3>
              <input type="number" className='w-1/5 pl-1 border-black border-[1px]' placeholder='1' />
            </div>
            <div className='flex flex-row justify-between'>
              <h3 className='text-xs text-slate-600'>Children</h3>
              <input type="number" className='w-1/5 pl-1 border-black border-[1px]' placeholder='0' />
            </div>
            <div className='flex flex-row justify-between'>
              <h3 className='text-xs text-slate-600'>Room</h3>
              <input type="number" className='w-1/5 pl-1 border-black border-[1px]' placeholder='1' />
            </div>
          </div>
          <button className='bg-blue-700 p-2 mt-4 text-sm text-slate-200 text-center w-full'>Search</button>
      </div>
    </div>
  )
}

export default SearchFilter