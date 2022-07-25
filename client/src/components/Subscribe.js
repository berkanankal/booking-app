function Subscribe() {
  return (
    <div className="w-full mt-10">
        <div className="bg-blue-900 flex flex-col gap-3 items-center justify-center text-white p-10">
            <h1 className="font-bold text-4xl">Save time, save money!</h1>
            <h2 className="tracking-tight">Sign up and we'll send the best deals to you</h2>
            <div className="flex gap-3">
                <input className="placeholder:p-4 placeholder:text-sm rounded-lg h-12 w-72" type="text" placeholder="Your Email" />
                <button className="bg-blue-500 rounded-lg text-white p-3">Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Subscribe