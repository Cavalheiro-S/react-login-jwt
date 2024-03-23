import AuthProvider from './provider/auth.provider'
import Routes from './routes'

function App() {

  return (
    <>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  )
}

export default App
