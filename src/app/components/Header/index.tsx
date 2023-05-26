'use client'

import { GithubLogo } from 'phosphor-react'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="flex justify-between items-center pt-5">
      <Image
        src="/rocketseat-logo.svg"
        width={150}
        height={150}
        alt="Rocketseat Blog"
        className="object-cover"
      />
      <nav>
        <Link
          href="https://github.com/viniciusferreira7"
          target="_blank"
          rel="noreferrer"
          className="text-[#8257e5] text-2xl"
          aria-label="Github"
        >
          <GithubLogo weight="bold" />
        </Link>
      </nav>
    </header>
  )
}
