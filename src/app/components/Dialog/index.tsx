'use client'

import { useState } from 'react'

export function Dialog() {
  const [openDialog, setOpenDialog] = useState(false)

  function handleOpenDialog() {
    setOpenDialog(true)
  }

  return (
    <>
      <button
        type="button"
        className="text-[#8257e5] text-md hover:opacity-70 hover:ease-linear"
        onClick={handleOpenDialog}
      >
        Termos de uso
      </button>
      {openDialog && (
        <div className=" bg-zinc-900 rounded-lg fixed p-20 top-1/2 left-1/2 text-white -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-2xl">Termos de uso</h2>
          <p>Esses são os termos de uso</p>
        </div>
      )}
    </>
  )
}
