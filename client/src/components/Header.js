import Category from './Category';

function Header() {
  return (
    <>
      <div className="container mx-auto pt-5 pb-5">
          <div className="flex justify-between text-white">
              <span className="text-2xl font-semibold">BE Booking</span>
              <div className="flex gap-2">
                  <button className="text-blue-800 bg-white border px-2 rounded-sm hover:text-white hover:bg-blue-800 transition-colors">Register</button>
                  <button className="text-blue-800 bg-white border px-2 rounded-sm hover:text-white hover:bg-blue-800 transition-colors">Login</button>
              </div>
          </div>
      </div>
      <Category />
    </>
  )
}

export default Header