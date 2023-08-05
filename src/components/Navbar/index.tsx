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
        <nav>
            <img src={Logo} />
            <ul>
                {rotas.map((rota, index) => (
                    <li key={index} className="">
                        {rota.label}
                    </li>
                ))}
            </ul>
        </nav>
    );
}