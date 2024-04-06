import { TokenBalance, Owner, TokenInfo, TransferTokensForm } from '../components'

export default function Home() {
  return (
    <section className="flex flex-col place-items-center gap-4 py-20 px-20">
      <h1>Prestamo DeFi3</h1>
      <TokenBalance />
      <Owner />
      <TokenInfo />
      <TransferTokensForm />
    </section>
  )
}
