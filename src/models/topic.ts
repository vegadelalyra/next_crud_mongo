import mongoose, { Model, ObjectId, Schema } from 'mongoose'

const { ObjectId } = mongoose.Types

export interface ITopic {
    _id: ObjectId
    title: string
    description: string
}

const topicSchema = new Schema<ITopic>(
    {
        title: String,
        description: String
    },
    { timestamps: true }
)

export const Topic: Model<ITopic> =
    mongoose.models.Topic || mongoose.model('Topic', topicSchema)
