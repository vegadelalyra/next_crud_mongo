import EditTopicForm from '@/components/EditTopicForm'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import React from 'react'

const getTopicById = async (id: string) => {
    try {
        const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
            cache: 'no-store'
        })

        if (!res.ok) {
            throw new Error('Failed to fetch topic')
        }

        return res.json()
    } catch (error) {
        console.log(error)
    }
}

const Edition = async ({ params }: { params: Params }) => {
    const { id } = params
    const { topic } = await getTopicById(id)
    const { title, description } = topic

    return <EditTopicForm id={id} title={title} description={description} />
}

export default Edition
