import mongoose from "mongoose";

export const connectToDB = async () => {
    const connection = {}
    if (connection.isConnected) return; // Return early if we are already connected
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI)
        connection.isConnected = db.connections[0].readyState
    }
    catch (err) {
        throw new Error(err)
    }
}