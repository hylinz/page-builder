import Link from "next/link";

export default function AdminHeader() {
  return (
    <header className="px-4 py-8 w-full flex bg-teal-800 max-h-10">
      <div className="flex-1 flex items-center">
        <p className="mr-4">
            Logo
        </p>
        <p>
            Name HCMS
        </p>
      </div>
      <nav className="flex-1">
        <ul className="flex justify-between items-center text-white w-full">
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
        </ul>
      </nav>
    </header>
  );
}
