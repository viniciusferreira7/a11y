'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { XCircle } from 'phosphor-react'

export function TermsOfUseContentModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          className="text-violet11 shadow-blackA7 hover:bg-whiteinline-flex 
            h-[35px] items-center justify-center rounded-[4px] 
            bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] 
            focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none"
        >
          Termos de uso
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black opacity-70 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content
          className="data-[state=open]:animate-contentShow 
            fixed top-[50%] left-[50%] 
            max-h-[85vh] w-[50vw] max-w-[450px] translate-x-[-50%] 
            translate-y-[-50%] rounded-[6px] bg-zinc-900 p-[25px] 
            shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none"
        >
          <Dialog.Title className="text-white m-0 text-[17px] font-medium">
            Termos de uso
          </Dialog.Title>
          <Dialog.Description className="text-white mt-[10px] mb-5 text-[15px] leading-normal">
            Esses são os termos de uso
          </Dialog.Description>
          <Dialog.Close asChild>
            <button
              className="absolute top-7 right-4 text-white text-lg"
              aria-label="Close"
            >
              <XCircle weight="bold" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
