import mongoose from 'mongoose'

export const connectMongoDB = async () => {
    const mongoBDURI = process.env.MONGODB_URI

    if (!mongoBDURI) {
        throw new Error('Not DB configuration provided.')
    }

    try {
        await mongoose.connect(mongoBDURI)
        console.log('[MONGODB ATLAS]: Connected to MongoDB Atlas Cluster.')
    } catch (error) {
        console.log(
            `[MONGODB ATLAS]: Error connecting to MongoDB Atlas Cluster: ${error}`
        )
    }
}
