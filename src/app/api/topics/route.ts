import { connectMongoDB } from '@/lib/mongodb'
import { Topic } from '@/models/topic'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest): Promise<
    NextResponse<{
        message: string
    }>
> {
    const { title, description } = await request.json()
    await connectMongoDB()
    await Topic.create({ title, description })
    return NextResponse.json({ message: 'Topic Created' }, { status: 201 })
}

export async function GET(): Promise<
    NextResponse<{
        message: string
        topics: any
    }>
> {
    await connectMongoDB()
    const topics = await Topic.find()
    return NextResponse.json(
        { message: 'Here is all your topics!', topics },
        { status: 200 }
    )
}
