interface FooterProps {}

function Footer({}: FooterProps) {
  return (
    <footer className="border-t border-zinc-900 mt-auto">
      <div className="mx-auto max-w-4xl py-4 text-sm text-zinc-500 flex items-center justify-between gap-4">
        <span>© {new Date().getFullYear()} Market Rewind</span>
        <div>
          <a
            href="https://x.com/0xfarhansyed"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-brand-500"
            aria-label="X (Twitter)"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M18.244 3H21l-6.56 7.5L22 21h-6.757l-4.22-5.282L5.8 21H3l6.93-7.93L2 3h6.757l3.86 4.83L18.244 3zm-1.184 16.2h1.258L7.02 4.74H5.72L17.06 19.2z" />
            </svg>
            @0xfarhansyed
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
