const express = require('express');
const cors = require('cors');
const aiRouter = require('./routes/ai.routes'); // adjust path

const app = express();

// Middleware to parse JSON
app.use(express.json());

// CORS middleware – allow requests from your Vercel frontend
app.use(cors({
  origin: "https://codesage-frontend.vercel.app", // your Vercel frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"]
}));

// Your routes
app.use('/ai', aiRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
