import Hero from "@/components/sections/Hero";
// import Upgrade from "@/components/sections/Upgrade";

// vercel analytics
import { Analytics } from "@vercel/analytics/react"


function App() {

  return (
    <div className="min-h-svh flex flex-col bg-zinc-950 text-zinc-100">
      <Analytics />
      <main className="flex-1">
        <Hero />
        {/* <Upgrade /> */}
      </main>
    </div>
  );
};

export default App;
