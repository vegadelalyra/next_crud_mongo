'use client'

import React, { FormEventHandler, useState } from 'react'

interface EditTopicFormProps {
    id: string
    title: string
    description: string
}

const EditTopicForm: React.FC<EditTopicFormProps> = ({
    id,
    title,
    description
}) => {
    const [newTitle, setNewTitle] = useState(title)
    const [newDescription, setNewDescription] = useState(description)

    const handleSubmit: FormEventHandler<HTMLFormElement> = async e => {
        e.preventDefault()

        try {
            const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    title: newTitle,
                    description: newDescription
                })
            })

            if (!res.ok) throw new Error('Failed to update topic!')

            window.location.href = '/'
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
            <input
                className='border border-slate-500 px-8 py-2'
                type='text'
                value={newTitle}
                onChange={e => setNewTitle(e.target.value)}
                placeholder='Topic Title'
            />
            <input
                className='border border-slate-500 px-8 py-2'
                type='text'
                value={newDescription}
                onChange={e => setNewDescription(e.target.value)}
                placeholder='Topic Description'
            />
            <button className='w-fit bg-green-600 px-6 py-3 font-bold text-white'>
                Update Topic
            </button>
        </form>
    )
}

export default EditTopicForm
