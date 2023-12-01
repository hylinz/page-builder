import Link from "next/link";

export default function Page() {
    return ( 
      <div className="w-full h-screen flex flex-col justify-center items-center">
    <h1 className="text-3xl font-bold">Not all who wander are lost</h1>
    <span className="text-l text-gray-800">But you seem to be, there is nothing here!</span>
    <Link className="text-l font-bold text-blue-900" href={'/'}>Click here to go back to the start page</Link>
    </div>
    )
  }