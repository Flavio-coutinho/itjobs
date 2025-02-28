import { User } from '@clerk/nextjs/server'
import Image from 'next/image'
import React from 'react'

type Props = {
  user?: null | User
}

const Navigation = ({ user }: Props) => {
  return (
    <div className="p-4 flex items-center justify-between relative">
      <aside className="flex items-center gap-2">
        <Image
          src={'./assets/plura-logo.svg'}
          width={40}
          height={40}
          alt='itjobs logo'
        />
        <span className="text-xl font-bold">It Jobs</span>
      </aside>
    </div>
  )
}

export default Navigation