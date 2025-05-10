const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const cron = require("node-cron");
const scrapeEvents = require("./scrapers/eventScrapper");
const cors = require("cors");
const eventRoute = require("./routes/index");

app.use(cors());
app.use(express.json());

const connectToDb = async () => {
	try {
		await mongoose.connect(process.env.DB_URL);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.error("Error connecting to MongoDB:", error);
	}
};

connectToDb();

scrapeEvents(); // Running the Scraper immediatly on startup
cron.schedule("0 */6 * * *", () => {
	console.log("Running scraper");
	scrapeEvents();
});

app.use("/api/events", eventRoute);

app.get("/", (req, res) => {
	res.status(200).json({ success: true, message: "Hello World" });
});

app.listen(8081, console.log("Server is listening at 8081"));
