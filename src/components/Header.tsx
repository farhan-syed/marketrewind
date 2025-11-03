import RewindIcon from "./RewindSVG";

interface HeaderProps { }

function Header({ }: HeaderProps) {
  return (

    <header className="sticky top-0 z-30 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="/" className="inline-flex items-center gap-1">
          <span className="font-semibold tracking-tight">
            Market Rewind
          </span>
          <RewindIcon size={16} strokeWidth={2} />
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
          {/* <a className="text-zinc-100 font-medium" href="/rewind">Rewind</a>
            <span className="opacity-40" aria-disabled>Watch</span>
            <span className="opacity-40" aria-disabled>Insight</span>
            <a className="opacity-80 hover:opacity-100" href="/pro">Pro</a> */}
        </nav>
        <div className="flex items-center gap-3">
          <a href="/signin" className="text-sm opacity-80 hover:opacity-100">Sign in</a>
          <a href="/signup" className="rounded-lg bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-900 hover:bg-white">Get started</a>
        </div>
      </div>
    </header>

  )
}

export default Header;
