

import mongoose from "mongoose";

const connectDB = async (db: string = "DB") => {
    try {
        // Check if DATABASE_URL is defined, if not, throw an error
        const dbURL = process.env.DATABASE_URL;

        if (!dbURL) {
            throw new Error("DATABASE_URL is not defined in the environment variables.");
        }

        const conn = await mongoose.connect(dbURL);
        console.log(`MongoDB Connected: successful on ${conn.connection.host}  db : ${db}`);
    } catch (error) {
        console.error(`Error connectDB: ${(error as Error).message}`);
        process.exit(1);
    }
};

export default connectDB;

