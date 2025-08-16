const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { errorHandler } = require('./middlewares/errorHandler');
const authRouter = require("./routes/auth.routes");
const connectDB = require("./config/db");

// Load env variables
dotenv.config();

const app = express();

// Middlewares
app.use(express.json());

app.use(cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE"
}));

// connect to mongoDB
connectDB();

// Routes
app.use('/api/auth', authRouter);

// Health check
app.get('/health', (_, res) => {
    res.json({ message: "Health is good" });
});

// Default route
app.get('/', (_, res) => {
    res.send("API running correctly");
});


// Error handler (after routes)
app.use(errorHandler);

// Export app
module.exports = app;
