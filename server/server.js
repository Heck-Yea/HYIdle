import express from "express";
import cors from "cors";
import records from "./routes/record.js";
import userRoutes from "./routes/userRoute.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/record", records);
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
