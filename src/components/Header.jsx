import { ConnectKitButton } from 'connectkit'
export default function Header() {

  
  <header className="bg-blue-400  py-2 px-3 sm:px-8 sm:py-4 flex justify-between items-center border-b shadow-xs">
      {/* Logo para mobile */}
      <img src="/LogoBanco.jpeg" alt="PrestamoDeFi3-mobile-logo" className="sm:hidden" width={45}/>
      {/* Logo para desktop */}
      <img src="/LogoCirculo.jpeg"  alt="PrestamoDeFi3-desktop-logo" className="hidden sm:block" width={250}/>

      <ConnectKitButton showBalance />
  </header>
  
}
