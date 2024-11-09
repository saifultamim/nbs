import mongoose from "mongoose";

const connectDB = async ( db: string = "DB"  ) => {
    try {
        const conn = await mongoose.connect(process.env.DATABASE_URL!);
        console.log(`MongoDB Connected: successful on ${conn}  db : ${db}`);
    } catch (error) {
        console.error(`Error: ${(error as Error).message}`);
        process.exit(1);
    }
};

export default connectDB;
