import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import records from './routes/record.js';
import userRoutes from './routes/userRoute.js';

dotenv.config({ path: './config.env' });

const app = express();
const PORT = process.env.PORT || 5050;
const uri = process.env.MONGODB_URI || "";

app.use(cors());
app.use(express.json());

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB!');
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

app.use("/record", records);
app.use("/users", userRoutes);