import './App.css'
import NameAuth from './components/NameAuth'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient()
  localStorage.setItem("firstName", "")
  localStorage.setItem("lastName", "")
  localStorage.setItem("email", "")
  localStorage.setItem("password", "12345")
  return (
    <>
      <QueryClientProvider client={queryClient} >
        <NameAuth />
      </QueryClientProvider>

    </>
  )
}

export default App
