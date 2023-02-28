import React from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { DialogContent, DialogOverlay, DialogTrigger } from "./styles"

const index = () => {
  return (
    <>
      <Dialog.Root>
        <DialogTrigger asChild></DialogTrigger>
        <Dialog.Portal>
          <DialogOverlay />
          <DialogContent></DialogContent>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}

export default index
