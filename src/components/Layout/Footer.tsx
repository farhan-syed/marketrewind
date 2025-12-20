interface FooterProps {}

function Footer({}: FooterProps) {
  return (
    <footer className="border-t border-zinc-900 mt-auto">
      <div className="mx-auto max-w-4xl py-4 text-sm text-zinc-500 flex justify-end gap-4">
        {/*<span>© {new Date().getFullYear()} Market Rewind</span>*/}
        <div>
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
      </div>
    </footer>
  );
}

export default Footer;
