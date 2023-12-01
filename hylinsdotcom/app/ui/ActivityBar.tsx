"use client"
import Image from "next/image";

export default function ActivityBar() { 
      return (
      <div className="bg-gradient-to-b from-green-500 via-green-600 to-green-700 rounded w-fit flex justify-center items-center py-2 px-4 hover:from-green-800">
        <nav className="mr-4">
          <Image
            height={25}
            width={25}
            src="/winlogo.png"
            alt="Windows Logo image"
          />
        </nav>
        <h2 className="text-white">Start</h2>
      </div>
  );
}

