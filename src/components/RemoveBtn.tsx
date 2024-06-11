'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'

interface RemoveBtnProps {
  id: string
}

const RemoveBtn: React.FC<RemoveBtnProps> = ({ id }) => {
    const router = useRouter()

    const removeTopic = async () => {
        const confirmed = confirm('Are you sure?')

        if (!confirmed) return

        const url = 'http://localhost:3000/api/topics/' + id
        const res = await fetch(url, { method: 'DELETE' })

        if (res.ok) router.refresh()
    }

    return (
        <button onClick={removeTopic} className='text-red-400'>
            <HiOutlineTrash size={24} />
        </button>
    )
}

export default RemoveBtn
