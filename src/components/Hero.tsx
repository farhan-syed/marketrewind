import RewindTool from "./RewindTool";

import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react';

interface HeroProps {

}

function Hero({ }: HeroProps) {

    return (
        <section className="relative">
            <div className="mx-auto max-w-6xl px-4 py-12 lg:py-10 grid gap-10 lg:grid-cols-2 lg:items-center">
                <div>
                    <h1 className="text-3xl/tight md:text-5xl/tight font-semibold tracking-light">
                        Rewind, compare and track.
                    </h1>
                    <p className="mt-3 max-w-prose text-zinc-300">
                        Pick an entry date and an exit date to see
                        percent return and final value in seconds. Save scenarios and set
                        reminders.
                    </p>
                    <div className="mt-6 flex items-center gap-4">
                    <SignedIn>
                      <a href="/dashboard" className="rounded-lg bg-zinc-100 px-4 py-2 text-zinc-900 font-medium hover:bg-white">Dashboard</a>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton mode="modal" fallbackRedirectUrl="/dashboard">
                          <button className="rounded-lg bg-zinc-100 px-4 py-2 text-zinc-900 font-medium hover:bg-white cursor-pointer">Create account</button>
                        </SignInButton>
                    </SignedOut>
                        {/* <a href="/pro" className="text-zinc-300 hover:text-zinc-100">See Pro features →</a> */}
                    </div>
                     <p className="mt-3 max-w-prose text-zinc-300 opacity-70 text-xs">No credit card required.</p>
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
                    </dl>
                </div>
                {/* start of tool */}
                <RewindTool />
                {/* end of tool */}

            </div>
        </section>
    )

}

export default Hero;
