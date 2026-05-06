import express from 'express';
import connectDB from './config/connection.js';
import userRoutes from './routes/signupRoutes.js';
import addCourseRoutes from './routes/addcourseRoutes.js';
import DropCourseRoutes from './routes/dropcourseRoutes.js';
import RegisterCourseRoutes from './routes/registercourseRoutes.js';
import timetableRoutes from "./routes/timetableRoutes.js";
import cors from 'cors';


const app = express();
const PORT = 5000;

app.use(cors());                                                                                                 //allow connection btw frontend and backend
app.use(express.json());                                                                                         //data samjhna json

app.use("/", userRoutes); 

app.use("/addcourse", addCourseRoutes);
app.use("/dropcourse", DropCourseRoutes);
app.use("/registercourse", RegisterCourseRoutes);
app.use("/timetable", timetableRoutes);

connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
