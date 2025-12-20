import RewindTool from "@/components/features/rewind-tool";

// import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";

interface HeroProps {}

function Hero({}: HeroProps) {
  return (
    <section>
      <div className="mx-auto max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl px-4 grid gap-4 text-left">
        <h1 className="font-semibold tracking-tight text-[clamp(1.75rem,4vw,3rem)]">
          Rewind the market.
        </h1>
        <p className="text-zinc-300 max-w-prose leading-relaxed text-[clamp(0.95rem,1.2vw,1.05rem)]">
          Pick an entry date and an exit date to see percent return and final
          value in seconds.
        </p>
        {/*
          <div className="mt-6 flex items-center gap-4">
            <SignedIn>
              <a
                href="/dashboard"
                className="rounded-lg bg-zinc-100 px-4 py-2 text-zinc-900 font-medium hover:bg-white"
              >
                Dashboard
              </a>
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal" fallbackRedirectUrl="/dashboard">
                <div>
                  <button className="rounded-lg bg-zinc-100 px-4 py-2 text-zinc-900 font-medium hover:bg-white cursor-pointer">
                    Create account
                  </button>
                  <p className="mt-3 max-w-prose text-zinc-300 opacity-70 text-xs">
                    No credit card required.
                  </p>
                </div>
              </SignInButton>
            </SignedOut>
            <a href="/pro" className="text-zinc-300 hover:text-zinc-100">See Pro features →</a>
          </div>
          <dl className="mt-8 grid grid-cols-3 gap-6 text-xs text-zinc-300">
                        <div>
                            <dt className="opacity-70">Portfolio</dt>
                            <dd className="mt-1 font-medium text-zinc-100">Save trade scenarios and see P&L at a glance.</dd>
                        </div>
                        <div>
                            <dt className="opacity-70">Reminders</dt>
                            <dd className="mt-1 font-medium text-zinc-100">Pick a future date. We’ll send you the result.</dd>
                        </div>
                        <div>
                            <dt className="opacity-70">Compare</dt>
                            <dd className="mt-1 font-medium text-zinc-100">Multiple trades over a timeframe.</dd>
                        </div>
                    </dl>*/}
        {/* start of tool */}
        <RewindTool />
        {/* end of tool */}
      </div>
    </section>
  );
}

export default Hero;
