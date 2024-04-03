import { AppLayout } from './components/ui/layouts'
import { Home } from './pages'
import { WagmiConfig } from "wagmi";
import { ConnectKitProvider,ConnectKitButton } from "connectkit";
import { config } from './config/wagmi'



function App() {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>
        <AppLayout>
          <Home />
          <ConnectKitButton />
        </AppLayout>
      </ConnectKitProvider>
    </WagmiConfig>
  )
}

export default App
