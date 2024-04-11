import { AppLayout } from './components/ui/layouts'
import { Home } from './pages'
import { WagmiConfig } from "wagmi";
import { ConnectKitProvider,ConnectKitButton } from "connectkit";
import { config } from './config/wagmi'
import toast, { Toaster } from 'react-hot-toast';



function App() {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider mode="Light">
        <AppLayout>
          <Home />
        </AppLayout>
      </ConnectKitProvider>
    </WagmiConfig>
  )
}

export default App
