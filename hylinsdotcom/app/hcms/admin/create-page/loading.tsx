export default function Loading() {
  return (
    <section className="w-full overflow-y-auto m-4 bg-primary custom-scrollbar rounded-md">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-300 rounded mb-4"></div>
        <div className="h-8 bg-gray-300 rounded mb-4"></div>
        <div className="h-8 bg-gray-300 rounded mb-4"></div>
      </div>
    </section>
  );
}
