// import express from "express";
// import cors from "cors";
// import "dotenv/config";
// import { clerkMiddleware, requireAuth } from '@clerk/express'
// import aiRouter from "./routes/aiRoutes.js";
// import connectCloudinary from "./configs/cloudinary.js";
// import userRouter from "./routes/userRoutes.js";

// const app = express();

// await connectCloudinary()

// app.use(cors());
// app.use(express.json());
// app.use(clerkMiddleware())


// app.get("/", (req, res) => {
//   res.send("Hello from backend");
// });

// app.use(requireAuth())

// app.use('/api/ai', aiRouter)
// app.use('/api/user', userRouter)

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`)
// });


import express from "express";
import cors from "cors";
import "dotenv/config";
import { clerkMiddleware } from '@clerk/express';
import aiRouter from "./routes/aiRoutes.js";
import connectCloudinary from "./configs/cloudinary.js";
import userRouter from "./routes/userRoutes.js";

const app = express();

await connectCloudinary();

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware()); // ✅ applies Clerk middleware for auth token parsing

// ✅ Don't use requireAuth globally here
// app.use(requireAuth()) ❌ REMOVE THIS LINE

app.get("/", (req, res) => {
  res.send("Hello from backend");
});

// ✅ Route handlers (auth is applied inside the router where needed)
app.use('/api/ai', aiRouter);
app.use('/api/user', userRouter);

app.use((err, req, res, next) => {
  console.error("🔥 Global Error Handler:", err.stack || err);
  res.status(err.status || 500).json({
    success: false,
    error: err.message || "Something went wrong",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

