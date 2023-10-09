import { useState } from "react"
import Logo from "../../assets/images/logo.png"
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const rotas = [
    {
      label: "Home",
      to: "#",
    },
    {
      label: "Blog",
      to: "#",
    },
    {
      label: "E-mail",
      to: "#",
    },
    {
      label: "Whatsapp",
      to: "#",
    },
  ]

  return (
    <>
      <nav className="bg-base-primary items-center flex lg:grid lg:grid-cols-2 py-5 lg:py-8 lg:justify-center drop-shadow-lg">
        <div className="flex-grow">
          <img className="pl-12 max-h-12 lg:max-h-12 lg:max-w-md" src={Logo} />
        </div>
        <ul className="flex-none hidden lg:flex items-center gap-16 ">
          {rotas.map((rota, index) => (
            <a key={index} href="#">
              <li
                className="transition ease-in-out delay-50 
                              hover:scale-110 duration-100 font-belleza
                               text-2xl uppercase active:text-neutral-600"
              >
                {rota.label}
              </li>
            </a>
          ))}
        </ul>
        <section className="flex-none lg:hidden mr-5">
            {isMobileMenuOpen ? (
              <svg
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
        </section>
      </nav>
              <div
              className={`z-50 absolute flex flex-col shadow-md bg-base-primary h-screen w-full
               transform translate-x-full ease-in-out duration-300 ${
                isMobileMenuOpen ? " translate-x-0 " : " translate-x-full"
              }`}
            >
              <ul className="flex flex-col items-start pl-8 pt-12 divide-y divide-solid divide-neutral-600">
                {rotas.map((rota, index) => (
                    <li
                      key={index}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="active:bg-base-secondary p-4 w-11/12 font-belleza font-normal text-xl uppercase"
                    >
                      {rota.label}
                    </li>
                ))}
              </ul>
            </div>
        </>
  )
}
