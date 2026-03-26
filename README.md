# Study Planner

A web application that generates personalized study plans using AI. Simply input your subject, desired study duration, and difficulty level to receive a structured, day-by-day study plan.

## Features

- **AI-Powered Planning**: Leverages ChatGPT-4.2 via RapidAPI to create intelligent study plans
- **Flexible Input**: Customize plans by subject, number of days, and difficulty level (beginner, intermediate, advanced)
- **Clean Interface**: Simple, responsive web interface with card-based plan display
- **Real-time Generation**: Instant plan generation with loading feedback

## Tech Stack

- **Backend**: Node.js with Express.js
- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **AI Integration**: RapidAPI ChatGPT-4.2 service
- **Environment Management**: dotenv for API key security

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- RapidAPI account with ChatGPT-4.2 API access

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/brusanganw-cmd/study-planner.git
   cd study-planner
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Create a `.env` file in the root directory
   - Add your RapidAPI key:
     ```
     RAPID_API_KEY=your_rapidapi_key_here
     ```
   - Get your API key from [RapidAPI ChatGPT-4.2](https://rapidapi.com/)

4. **Start the application**
   ```bash
   npm start
   ```

5. **Access the app**
   - Open your browser and navigate to `http://localhost:3000`

## Usage

1. Enter the subject you want to study
2. Specify the number of days for your study plan
3. Select your current level (beginner, intermediate, or advanced)
4. Click "Generate Plan" to receive your personalized study schedule

The AI will generate a structured plan with daily objectives and activities tailored to your inputs.

## API Endpoints

### POST /generate-plan
Generates a study plan based on the provided parameters.

**Request Body:**
```json
{
  "subject": "string",
  "days": "number",
  "level": "beginner|intermediate|advanced"
}
```

**Response:**
```json
{
  "plan": "string"
}
```

## Project Structure

```
study-planner/
├── server.js          # Express server and API logic
├── package.json       # Dependencies and scripts
├── .env              # Environment variables (create this)
├── public/
│   ├── index.html    # Main HTML page
│   ├── script.js     # Frontend JavaScript
│   └── style.css     # Stylesheet
└── README.md         # This file
```

## Development

### Available Scripts

- `npm start` - Start the production server
- `npm test` - Run tests (currently not implemented)

### Adding Features

The application is built with a simple architecture:
- Frontend handles user input and displays results
- Backend processes requests and interfaces with the AI API
- Static files are served from the `public/` directory

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the [package.json](package.json) file for details.

## Acknowledgments

- Powered by [ChatGPT-4.2 via RapidAPI](https://rapidapi.com/)
- Built with Express.js and vanilla JavaScript

## Support

If you encounter any issues or have questions, please open an issue on the [GitHub repository](https://github.com/brusanganw-cmd/study-planner/issues).</content>
<parameter name="filePath">c:\Users\rusan\Documents\study-planner\README.md
