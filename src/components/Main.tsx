import { Outlet } from "react-router";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

function Layout() {
  return (
    <div className="h-screen flex flex-col bg-zinc-950 text-zinc-100 overflow-hidden">
      <Header />
      <main className="flex-1 flex items-center justify-center overflow-hidden">
        <div className="w-full max-h-full overflow-auto">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
