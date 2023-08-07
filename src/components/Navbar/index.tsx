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
        <nav className='bg-base-cyan flex gap-16 p-2 items-center justify-center drop-shadow-sm'>
            <img className='object-cove h-auto w-auto' src={Logo} />
            <ul className='flex items-center gap-16'>
                {rotas.map((rota, index) => (
                    <li key={index} className="font-old_standard text-lg">
                        {rota.label}
                    </li>
                ))}
            </ul>
        </nav>
    );
}