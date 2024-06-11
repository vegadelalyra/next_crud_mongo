import { connectMongoDB } from '@/lib/mongodb'
import { Topic } from '@/models/topic'
import { NextRequest, NextResponse } from 'next/server'

interface Params {
    id: string
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: Params }
): Promise<NextResponse<{ message: string }>> {
    // const id = request.nextUrl.searchParams.get('id')
    const { id } = params
    await connectMongoDB()
    await Topic.findByIdAndDelete(id)
    return NextResponse.json({ message: 'Topic deleted!' }, { status: 200 })
}

export async function PATCH(
    request: NextRequest,
    { params }: { params: Params }
): Promise<
    NextResponse<{
        message: string
    }>
> {
    const { id } = params
    const { title, description } = await request.json()
    await connectMongoDB()
    await Topic.findByIdAndUpdate(id, {
        title,
        description
    })
    return NextResponse.json({ message: 'Topic updated!' }, { status: 200 })
}

export async function GET(
    request: NextRequest,
    { params }: { params: Params }
) {
    const { id } = params
    await connectMongoDB()
    const topic = await Topic.findById(id)
    return NextResponse.json(
        { message: 'Are you looking for this topic?', topic },
        { status: 200 }
    )
}
