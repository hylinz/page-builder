import AdminHeader from "./ui/AdminHeader";
import AdminSideBar from "./ui/AdminSideBar";
import 'react-toastify/dist/ReactToastify.css';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <main className="h-screen">
      <AdminHeader />
      <section className="flex w-full h-screen">
      <AdminSideBar />
        {children}
      </section>
    </main>
    </>
  );
}
