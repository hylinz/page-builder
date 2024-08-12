import Link from "next/link";

export default function Custom404() {
    return ( 
      <div className="w-full h-screen flex flex-col justify-center items-center">
    <h1 className="text-3xl font-bold">Här var det tomt</h1>
    <span className="text-l text-gray-800">Det ser ut som att du landat på en sida som inte finns!</span>
    <Link className="text-l font-bold text-blue-900" href={'/'}>Klick här för att gå tillbaka till startsidan</Link>
    </div>
    )
  }