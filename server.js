import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

app.post("/generate-plan", async (req, res) => {
  const { subject, days, level } = req.body;

  try {
    const response = await fetch(
      "https://chatgpt-42.p.rapidapi.com/conversationgpt4-2",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "X-RapidAPI-Key": process.env.RAPID_API_KEY,
          "X-RapidAPI-Host": "chatgpt-42.p.rapidapi.com",
        },
        body: JSON.stringify({
          messages: [
            {
              role: "user",
              content: `Create a ${days}-day ${level} study plan for ${subject}. Format as Day 1, Day 2...`
            }
          ],
          web_access: false
        }),
      }
    );

    const data = await response.json();

    console.log("API response:", data);

  
    if (!data.result) {
      return res.json({ plan: "Error: No result returned from API" });
    }

    res.json({ plan: data.result });

  } catch (error) {
    console.error(error);
    res.json({ plan: "Error generating study plan" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});