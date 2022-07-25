import React from 'react'

function Cities() {
  return (
    <div className="container mx-auto mt-20 mb-10">
        <div className="flex justify-between">
            <div className="relative">
                <img className="h-80 w-[25rem] object-cover rounded-lg" src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" alt="cities_1" />
                <div className="absolute bottom-5 left-5 font-bold text-white text-3xl">
                    <h1>Dublin</h1>
                    <h1>123 properties</h1>
                </div>
            </div>
            <div className="relative">
                <img className="h-80 w-[25rem] object-cover rounded-lg" src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" alt="cities_1" />
                <div className="absolute bottom-5 left-5 font-bold text-white text-3xl">
                    <h1>Reno</h1>
                    <h1>533 properties</h1>
                </div>
            </div>
            <div className="relative">
                <img className="h-80 w-[25rem] object-cover rounded-lg" src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" alt="cities_1" />
                <div className="absolute bottom-5 left-5 font-bold text-white text-3xl">
                    <h1>Austin</h1>
                    <h1>532 properties</h1>
                </div>
            </div>
            {/* <div className="relative">
                <img className="h-[19rem] w-[19rem] object-cover rounded-lg" src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" alt="cities_1" />
                <div className="absolute bottom-5 left-5 font-bold text-white text-3xl">
                    <h1>Pyla</h1>
                    <h1>113 properties</h1>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default Cities