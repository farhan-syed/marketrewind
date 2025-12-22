interface FooterProps {}

function Footer({}: FooterProps) {
  return (
    <footer className="border-t border-zinc-900 mt-auto font-mono tracking-tighter">
      <div className="mx-auto max-w-lg md:max-w-xl lg:max-w-2xl px-6 md:px-0 py-3 flex items-center justify-end text-sm text-zinc-500">
        {/* Right side */}
        <span className="mr-1">built by</span>
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
