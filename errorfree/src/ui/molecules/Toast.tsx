import React from 'react'
 
import { Button } from "../../../@/components/ui/button"
// import { ToastAction } from "../../../@/components/ui/toast"
import { useToast } from "../../../@/components/ui/use-toast"

const Toast = () => {
    const { toast } = useToast()
 
    return (
         
            <Button
              variant="outline"
              onClick={() => {
                toast({
                  description: "Your message has been sent.",
                })
              }}
            >
              Show Toast
            </Button>
  
    )
}

export default Toast