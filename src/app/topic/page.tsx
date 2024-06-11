'use client'

import React, { FormEvent, FormEventHandler, useState } from 'react'

const Topic: React.FC = ({}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (
        e: FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault()

        if (!title || !description) {
            alert('Title and description are required.')
            return
        }

        try {
            const res = await fetch('http://localhost:3000/api/topics', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ title, description })
            })

            if (res.ok) {
              window.location.href = '/'
            } else {
                throw new Error('Failed to create a topic!')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
                className='border border-slate-500 px-8 py-2'
                type='text'
                placeholder='Topic Title'
            />
            <input
                value={description}
                onChange={e => setDescription(e.target.value)}
                className='border border-slate-500 px-8 py-2'
                type='text'
                placeholder='Topic Description'
            />
            <button
                type='submit'
                className='w-fit bg-green-600 px-6 py-3 font-bold text-white'
            >
                Add Topic
            </button>
        </form>
    )
}

export default Topic
