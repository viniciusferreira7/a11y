'use client'

import { useEffect, useRef, useState } from 'react'

export function Dialog() {
  const [openDialog, setOpenDialog] = useState(false)
  const modalRef = useRef(null)

  function handleOpenDialog() {
    setOpenDialog(true)
  }

  useEffect(() => {
    if (openDialog) {
      modalRef?.current?.focus()
    }
  }, [openDialog])

  return (
    <>
      <button
        type="button"
        aria-controls="modal1"
        className="text-[#8257e5] text-md hover:opacity-70 hover:ease-linear"
        onClick={handleOpenDialog}
      >
        Termos de uso
      </button>
      {openDialog && (
        <div
          id="modal1"
          ref={modalRef}
          role="dialog"
          aria-labelledby="modal1Title"
          aria-describedby="modal1Description"
          tabIndex={-1}
          className=" bg-zinc-900 rounded-lg fixed p-20 top-1/2 left-1/2 text-white -translate-x-1/2 -translate-y-1/2"
        >
          <h2 className="text-2xl" id="modal1Title">
            Termos de uso
          </h2>
          <p id="modal1Description">Esses são os termos de uso</p>
        </div>
      )}
    </>
  )
}
