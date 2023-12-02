import Link from "next/link";

export default function AdminHeader() {
  return (
    <header className="px-4 py-8 w-full flex bg-secondary text-primary max-h-10">
      <div className="flex-1 flex items-center">
        <p className="mr-4">
            Logo
        </p>
      </div>
      <div className="flex-1 flex items-center justify-end">
        <p>
            Back to Website
        </p>
      </div>
    </header>
  );
}
