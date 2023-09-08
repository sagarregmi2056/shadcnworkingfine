import React from 'react'
 
import { Button } from "../../../@/components/ui/button"
// import { ToastAction } from "../../../@/components/ui/toast"
import { useToast } from "../../../@/components/ui/use-toast"

import { ToastAction } from "../../../@/components/ui/toast"


const Toast = () => {
    const { toast } = useToast()
 
    return (
        <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Scheduled: Catch up ",
            description: "Friday, February 10, 2023 at 5:57 PM",
            action: (
              <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            ),
          })
        }}
      >
        Add to calendar
      </Button>
  
    )
}

export default Toast