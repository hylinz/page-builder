import AdminHeader from "./ui/AdminHeader";
import AdminSideBar from "./ui/AdminSideBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="h-screen">
        <AdminHeader/>
        <section className="flex w-full h-screen">
        <AdminSideBar />
        {children}
        </section>
      </main>
    </>
  );
}
