'use client'

import { GithubLogo } from 'phosphor-react'
import Image from 'next/image'

export function Header() {
  return (
    <header className="flex justify-between items-center pt-5">
      <Image src="/rocketseat-logo.svg" width={150} height={100} alt="logo" />
      <nav>
        <a
          href="https://github.com/viniciusferreira7"
          target="_blank"
          rel="noreferrer"
          className="text-[#8257e5] text-2xl"
        >
          <GithubLogo weight="bold" />
        </a>
      </nav>
    </header>
  )
}
