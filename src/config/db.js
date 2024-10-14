import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
    await mongoose
    .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.CLUSTER_ADDRESS}/${process.env.DB_NAME}`)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));
};

export default connectDB;