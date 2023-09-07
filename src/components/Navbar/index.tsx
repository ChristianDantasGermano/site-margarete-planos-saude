import { useState } from 'react';
import Logo from '../../assets/images/logo.png'
import { Menu } from '@headlessui/react';
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

    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <nav className='bg-base-cyan flex  lg:grid lg:grid-cols-2 py-3 lg:py-5 lg:justify-center drop-shadow-lg'>
            
                <section className='lg:hidden'>
                <Menu>
                    <Menu.Items>
                        <ul className='z-10 bg-base-cyan h-screen w-2/3 absolute flex flex-col'>
                            {rotas.map((rota, index) => (
                                <Menu.Item key={index}>
                                    <li key={index} className="font-belleza text-3xl">
                                        {rota.label}
                                    </li>
                                </Menu.Item>
                            ))}
                        </ul>
                    </Menu.Items>
                    <div className='ml-5 mt-2'>
                        <Menu.Button>
                            <svg onClick={() => setIsNavOpen(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </Menu.Button>
                    </div>
                    </Menu>
                </section>
                <img className='lg:pl-12 pl-5 max-h-12 lg:max-h-24  lg:max-w-md' src={Logo} />
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