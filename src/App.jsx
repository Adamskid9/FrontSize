import {Header}from "./ui/Header"

import {BrowserRouter, Route,  Routes} from "react-router-dom"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"
import {Toaster} from "react-hot-toast"

import Test from "./ui/Test"
import Footer from "./ui/Footer"


const queryClient = new QueryClient({
  defaultOptions:{
    staleTime:0
  }
})


function App() {


  return <BrowserRouter>
  <QueryClientProvider client={queryClient}>
  <ReactQueryDevtools initialIsOpen={false} />
  <Toaster gutter={12} 
   position="top-center"
   containerStyle={{margin:"8px"}}
   toastOptions={{
    success:{
      duration:3000,
    },
    error:{
      duration:5000,
      color:"red"
    },
    style:{
      fontSize:"16px",
      maxWidth:"500px",
      padding:"16px 24px" ,
      backgroundColor:"blue",
      color:"white",
      borderRadius:"100%"
    }
   }}

    />
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
