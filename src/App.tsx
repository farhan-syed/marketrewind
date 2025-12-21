import Hero from "@/components/sections/Hero";
// import Upgrade from "@/components/sections/Upgrade";

// vercel analytics
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="h-full bg-zinc-950 text-zinc-100">
      <Analytics />
      <div className="h-full flex items-center justify-center">
        <Hero />
      </div>
      {/* <Upgrade /> */}
    </div>
  );
}

export default App;
