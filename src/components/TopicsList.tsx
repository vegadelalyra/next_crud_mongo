import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import { HiPencilAlt } from 'react-icons/hi'
import { ITopic, Topic } from '@/models/topic'

interface ApiResponse {
    topics: ITopic[]
}

const getTopics = async(): Promise<ITopic[]> => {
    try {
        const url: string = process.env.API_URL + '/topics'
        const res = await fetch(url, { cache: 'no-store' })

        if (!res.ok) throw new Error('Failed to fetch topics')

        const data: ApiResponse = await res.json()
        return data.topics
    } catch (error) {
        console.log('Error loading topics: ', error)
        return []
    }
}

const TopicsList = async () => {
    const  topics = await getTopics()

    return (
        <>
        {topics.map((topic) => (
            <div key={Number(topic._id)} className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'>
                <div>
                    <h2 className='font-bold text-2xl'>{topic.title}</h2>
                    <div>{topic.description}</div>
                </div>

                <div className='flex gap-2'>
                    <RemoveBtn id={String(topic._id)} />
                    <Link href={`/${topic._id}`}> 
                        <HiPencilAlt size={24} />
                    </Link>
                    
                </div>
            </div>))}
        </>
    )
}

export default TopicsList
