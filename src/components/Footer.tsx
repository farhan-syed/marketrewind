interface FooterProps {}

function Footer({}: FooterProps){
    return (
        <div className="flex-1 h-16">
            <div className="flex flex-col text-center mb-4">
                <label className="text-xs font-bold dark:text-dark-s">by <a className="text-green-500 dark:text-dark-purple" href="https://x.com/0xfarhansyed">@0xfarhansyed</a></label>
            </div>
        </div>
    )
}

export default Footer;
