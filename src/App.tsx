import Hero from "@/components/sections/Hero";
// import Upgrade from "@/components/sections/Upgrade";

// vercel analytics
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="bg-zinc-950 text-zinc-100">
      <Analytics />
      <Hero />
      {/* <Upgrade /> */}
    </div>
  );
}

export default App;
