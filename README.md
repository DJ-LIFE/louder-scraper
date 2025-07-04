# Louder

Louder is a web application that helps users discover events by automatically
scraping event information from various sources and presenting them in a unified
interface.

## Project Structure

The project consists of two main parts:

- **Backend**: A Node.js/Express API for handling event data and scraping
- **Frontend**: A Next.js application for displaying events to users .

## Backend

### Technologies Used

- Node.js
- Express
- MongoDB (with Mongoose)
- node-cron for scheduling tasks

### Features

- RESTful API for accessing event data
- Automated event scraping from various sources
- Periodic updates of event information via cron jobs

### API Endpoints

- `GET /api/events`: Retrieve events
- `GET /`: Health check endpoint

## Frontend

The frontend is built with Next.js and communicates with the backend API to
display event information.

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/louder.git
cd louder
```

2. Install backend dependencies

```bash
cd backend
npm install
```

3. Install frontend dependencies

```bash
cd ../frontend
npm install
```

4. Create a `.env` file in the backend directory with the following variables:

```
DB_URL=your_mongodb_connection_string
PORT=8081
```

5. Start the backend server

```bash
npm start
```

6. In a separate terminal, start the frontend development server

```bash
cd ../frontend
npm run dev
```

## Development

### Backend

The backend server is set up to:

- Run the event scraper on startup
- Schedule the scraper to run every 6 hours using cron
- Connect to MongoDB for data storage

### Environment Variables

- `DB_URL`: MongoDB connection string
- `PORT`: Port for the backend server (defaults to 8081)
- `NODE_ENV`: Environment mode (development/production)
