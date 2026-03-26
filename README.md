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
- **Deployment**: PM2 process manager for production

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- RapidAPI account with ChatGPT-4.2 API access
- Git

## Installation and Local Development

### 1. Clone the Repository
```bash
git clone https://github.com/brusanganw-cmd/study-planner.git
cd study-planner
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory with your RapidAPI credentials:
```env
RAPID_API_KEY=your_rapidapi_key_here
```

**Getting your RapidAPI Key:**
1. Visit [RapidAPI ChatGPT-4.2](https://rapidapi.com/)
2. Sign up for an account or log in
3. Subscribe to the ChatGPT-4.2 API
4. Copy your API key from the dashboard

### 4. Run Locally
```bash
npm start
```

The application will start on `http://localhost:3000`. Open this URL in your browser to access the study planner.

### 5. Development Mode
For development with auto-restart on file changes, you can use nodemon:
```bash
npx nodemon server.js
```

## Deployment

### Prerequisites for Deployment
- Ubuntu server with SSH access
- Node.js installed on the server
- PM2 process manager
- Git

### Ubuntu Server Deployment Steps

#### 1. Connect to Your Server
```bash
ssh ubuntu@your-server-ip
# Replace with your actual server IP (e.g., 54.209.33.57 or 18.212.199.231)
```

#### 2. Update System and Install Node.js
```bash
sudo apt update
sudo apt upgrade -y
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

#### 3. Install PM2 Globally
```bash
sudo npm install -g pm2
```

#### 4. Clone the Repository
```bash
git clone https://github.com/brusanganw-cmd/study-planner.git
cd study-planner
```

#### 5. Install Dependencies
```bash
npm install --production
```

#### 6. Configure Environment Variables
Create a `.env` file with your production API key:
```bash
nano .env
```
Add:
```
RAPID_API_KEY=your_production_rapidapi_key_here
```

#### 7. Start the Application with PM2
```bash
pm2 start server.js --name "study-planner"
pm2 startup
pm2 save
```

#### 8. Configure Firewall (UFW)
```bash
sudo ufw allow 22
sudo ufw allow 3000
sudo ufw --force enable
```

#### 9. Access Your Application
Your application will be running on `http://your-server-ip:3000`

### Additional Deployment Commands

**Check PM2 status:**
```bash
pm2 status
```

**View logs:**
```bash
pm2 logs study-planner
```

**Restart application:**
```bash
pm2 restart study-planner
```

**Stop application:**
```bash
pm2 stop study-planner
```

## APIs Used

### RapidAPI ChatGPT-4.2
- **Purpose**: AI-powered study plan generation
- **Endpoint**: `https://chatgpt-42.p.rapidapi.com/conversationgpt4-2`
- **Documentation**: [RapidAPI ChatGPT-4.2 Docs](https://rapidapi.com/)
- **Authentication**: API key via `X-RapidAPI-Key` header
- **Usage**: Sends user prompts to generate structured study plans based on subject, duration, and difficulty level

## Usage

1. Enter the subject you want to study (e.g., "Mathematics", "History", "Programming")
2. Specify the number of days for your study plan (1-30 days recommended)
3. Select your current level:
   - **Beginner**: Basic concepts and foundational knowledge
   - **Intermediate**: Building on fundamentals with more complex topics
   - **Advanced**: In-depth analysis and specialized content
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

**Example Request:**
```bash
curl -X POST http://localhost:3000/generate-plan \
  -H "Content-Type: application/json" \
  -d '{"subject":"JavaScript","days":7,"level":"intermediate"}'
```

## Project Structure

```
study-planner/
├── server.js              # Express server and API logic
├── package.json           # Dependencies and scripts
├── .env                   # Environment variables (create this)
├── ecosystem.config.js    # PM2 configuration (optional)
├── public/
│   ├── index.html         # Main HTML page
│   ├── script.js          # Frontend JavaScript
│   └── style.css          # Stylesheet
└── README.md              # This file
```

## Development Challenges and Solutions

### 1. API Rate Limiting
**Challenge**: RapidAPI has rate limits that could affect user experience during high traffic.
**Solution**: Implemented proper error handling and user feedback. Added loading states to manage user expectations during API calls.

### 2. CORS Issues
**Challenge**: Initial development faced CORS errors when making API requests from the frontend.
**Solution**: Configured Express.js to handle CORS properly and ensured all API calls go through the backend proxy to avoid exposing API keys in the frontend.

### 3. Environment Variable Management
**Challenge**: Managing API keys securely across development and production environments.
**Solution**: Used dotenv package for local development and server environment variables for production deployment.

### 4. AI Response Formatting
**Challenge**: The AI responses needed consistent formatting for display as day-by-day plans.
**Solution**: Implemented client-side parsing to split responses into individual cards, with fallback error handling for malformed responses.

### 5. Production Deployment
**Challenge**: Ensuring the Node.js application runs reliably in production without manual intervention.
**Solution**: Used PM2 process manager for automatic restarts, log management, and clustering capabilities.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code follows the existing style and includes appropriate tests.

## Testing

Currently, the project uses basic error handling. Future improvements could include:
- Unit tests for API endpoints
- Integration tests for the AI response parsing
- End-to-end tests for the user interface

## License

This project is licensed under the ISC License - see the [package.json](package.json) file for details.

## Acknowledgments and Credits

### APIs and Services
- **RapidAPI ChatGPT-4.2**: Powered by OpenAI's GPT-4 model, providing intelligent study plan generation. Special thanks to the RapidAPI team for their comprehensive API marketplace.
  - Website: [RapidAPI](https://rapidapi.com/)
  - ChatGPT-4.2 Documentation: [RapidAPI ChatGPT-4.2](https://rapidapi.com/)

### Libraries and Frameworks
- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js
  - GitHub: [expressjs/express](https://github.com/expressjs/express)
  - Documentation: [expressjs.com](https://expressjs.com/)

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine
  - Website: [nodejs.org](https://nodejs.org/)

- **dotenv**: Zero-dependency module that loads environment variables from a .env file
  - GitHub: [motdotla/dotenv](https://github.com/motdotla/dotenv)

- **node-fetch**: A light-weight module that brings window.fetch to Node.js
  - GitHub: [node-fetch/node-fetch](https://github.com/node-fetch/node-fetch)

### Development Tools
- **PM2**: Advanced, production process manager for Node.js
  - Website: [pm2.keymetrics.io](https://pm2.keymetrics.io/)

- **Git**: Distributed version control system
  - Website: [git-scm.com](https://git-scm.com/)

### Special Thanks
- The open-source community for providing excellent tools and documentation
- RapidAPI for making AI APIs accessible to developers
- The Node.js community for their continuous innovation

## Support

If you encounter any issues or have questions:

1. Check the [GitHub Issues](https://github.com/brusanganw-cmd/study-planner/issues) page
2. Create a new issue with detailed information about your problem
3. Include your Node.js version, browser, and any error messages

## Future Enhancements

- User authentication and personalized plan history
- Export plans to PDF or calendar formats
- Integration with learning management systems
- Advanced customization options (time per day, specific topics, etc.)
- Mobile application development
- Multi-language support</content>
<parameter name="filePath">c:\Users\rusan\Documents\study-planner\README.md
