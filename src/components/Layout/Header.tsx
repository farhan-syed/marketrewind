import RewindIcon from "@/components/ui/RewindSVG";
// import {
//   SignedIn,
//   SignedOut,
//   SignInButton,
//   UserButton,
// } from "@clerk/clerk-react";

interface HeaderProps {}

function Header({}: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto max-w-4xl px-8 py-4 flex items-center justify-between">
        <a href="/" className="inline-flex items-center gap-1">
          <span className="font-semibold tracking-tight">Market Rewind</span>
          <RewindIcon size={16} strokeWidth={3} />
        </a>

        {/*<div className="flex items-center gap-3">
          <SignedOut>
            <SignInButton mode="modal" fallbackRedirectUrl="/dashboard">
              <button className="text-sm text-zinc-100 opacity-80 hover:opacity-100 cursor-pointer">
                Sign in
              </button>
            </SignInButton>
            <SignInButton mode="modal" fallbackRedirectUrl="/dashboard">
              <button className="rounded-lg bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-900 hover:bg-white cursor-pointer">
                Create account
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <a
              href="/dashboard"
              className="text-sm opacity-80 hover:opacity-100"
            >
              Dashboard
            </a>
            <UserButton />
          </SignedIn>
        </div>*/}
      </div>
    </header>
  );
}

export default Header;
