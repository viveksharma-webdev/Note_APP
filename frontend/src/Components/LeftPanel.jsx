import {HousePlus, Star, UserRoundPen,LogOut } from 'lucide-react'

const LeftPanel = () => {
  return (
    <div className="h-full w-1/4 flex flex-col rounded-md  shadow-lg py-2 px-3">
      <h1 className="font-bold text-lg border-b ">AI Notes</h1>
      <h2 className="mt-3 rounded-full border-[1px] border-pink-800 text-lg font-medium px-5 py-1 flex gap-2"> <HousePlus/> Home </h2>
      <h2 className="mt-3 rounded-full border-[1px] border-pink-800 text-lg font-medium px-5 py-1 flex gap-2"> <Star/> Favourites </h2>
      <h2 className="mt-3 rounded-full border-[1px] border-pink-800 text-lg font-medium px-5 py-1 flex gap-2"> <UserRoundPen/> Profile </h2>
       <a href="/login" className="rounded-full mt-3 bg-red-600 px-4 py-2 text-lg font-semibold text-white w-1/2 flex gap-2"><LogOut/>Logout</a>
    </div>
  )
}

export default LeftPanel

