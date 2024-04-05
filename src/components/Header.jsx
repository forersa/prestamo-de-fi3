import { ConnectKitButton } from 'connectkit'

export default function Header() {
  return (
    <header className="flex py-2 px-3 sm:px-8 sm:py-4 border-b justify-between items-center bg-white shadow-xs">
      {/* Logo para mobile */}
      <img src="/LogoBanco.jpeg" className="sm:hidden" alt="Prestamo De Fi3" width={45} />
      {/* Logo para desktop */}
      <img src="/LogoCirculo.jpeg" className="hidden sm:flex" alt="Prestamo De Fi3" width={150} />

      <ConnectKitButton showBalance />
    </header>
  )
}
