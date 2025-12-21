import { Outlet } from "react-router";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100 font-sans tracking-tight">
      <Header />
      <main className="flex-1 flex flex-col justify-center">
        {/*<div className="w-full max-h-full overflow-auto">*/}
        <Outlet />
        {/*</div>*/}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
