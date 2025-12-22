interface FooterProps {}

function Footer({}: FooterProps) {
  return (
    <footer className="border-t border-zinc-900 mt-auto font-mono tracking-tighter">
      <div className="mx-auto max-w-lg md:max-w-xl lg:max-w-2xl px-6 md:px-0 py-4 flex items-center justify-between text-sm text-zinc-500">
        {/* Left side */}
        {/* Right side */}
        <a
          href="https://x.com/0xfarhansyed"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-brand-500"
          aria-label="X (Twitter)"
        >
          @0xfarhansyed
        </a>
      </div>
    </footer>
  );
}

export default Footer;
