import { ConnectKitButton } from 'connectkit'

export default function Header() {
  return (
    <header className="flex py-2 px-3 sm:px-8 sm:py-4 border-b justify-between items-center bg-white shadow-xs">
      {/* Logo para mobile */}
      <img src="/blockmaker-small-logo.png" className="sm:hidden" alt="blockmaker-logo" width={45} />
      {/* Logo para desktop */}
      <img src="/blockmaker-full-logo.png" className="hidden sm:flex" alt="blockmaker-logo" width={250} />

      <ConnectKitButton showBalance />
    </header>
  )
}
