import { Toaster } from "../../components/ui/toaster"
 
 function RootLayout({ children }) {
  return (
      <div>
      <head />
      <body>
        <main>{children}</main>
        <Toaster/>
      </body>
      </div>
   
  )
}
export default RootLayout