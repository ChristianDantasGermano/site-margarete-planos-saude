import Logo from '../../assets/images/logo.png'
export default function Navbar() {
    const rotas = [{
        label: 'Home',
        to: '#'
    }, {
        label: 'Blog',
        to: '#'
    }, {
        label: 'E-mail',
        to: '#'
    },
    {
        label: 'Whatsapp',
        to: '#'
    }];
    return (
        <nav className='bg-base-cyan flex  lg:grid lg:grid-cols-2 py-3 lg:py-5 items-center lg:justify-center drop-shadow-lg'>
            <div className='lg:hidden ml-5'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
            <img className='grow lg:pl-12 pl-5 object-contain w-10/12 max-h-16 lg:max-h-24 max-w-xs lg:max-w-md' src={Logo} />
            <ul className='hidden lg:flex items-center gap-16'>
                {rotas.map((rota, index) => (
                    <li key={index} className="font-belleza text-3xl">
                        {rota.label}
                    </li>
                ))}
            </ul>
        </nav>
    );
}