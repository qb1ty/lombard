import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import ReactDOM from "react-dom/client"
import App from "./App"
import "../index.css"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60, // 1 час — данные считаются свежими
      gcTime: 1000 * 60 * 60, // 1 час — храним в памяти
      refetchOnWindowFocus: false, // popup часто перерисовывается, выключаем
      refetchOnReconnect: false,
      retry: 1
    },
  },
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
)
