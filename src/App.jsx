import {Header}from "./ui/Header"

import {BrowserRouter, Route,  Routes} from "react-router-dom"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"
import {Toaster} from "react-hot-toast"

import Test from "./ui/Test"
import Footer from "./ui/footer"


const queryClient = new QueryClient({
  defaultOptions:{
    staleTime:0
  }
})


function App() {


  return <BrowserRouter>
  <QueryClientProvider client={queryClient}>
  <ReactQueryDevtools initialIsOpen={false} />
  <Toaster gutter={12} position="top" />
  <Routes>
    <Route index element={<Test/>}/>
    <Route path="test" element={<Header/>}/>
    <Route path="test/:id" element={<Footer/>}/>
  </Routes>
  </QueryClientProvider>
  </BrowserRouter>
}
 <Header/>

export default App
