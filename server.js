const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("AI Chatbot server is running 🚀");
});

app.post("/chat", async (req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({
                error: "Message is required"
            });
        }

        // AI connection will be added in the next step.
        res.json({
            reply: "Your message was received: " + message
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Something went wrong"
        });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
