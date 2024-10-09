import mongoose from 'mongoose';

const connectDB = async () => {
    await mongoose
    .connect(`mongodb://localhost:27017/vehicle-workshop`)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));
};

export default connectDB;