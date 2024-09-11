# YouTube Competitor Analysis Tool

A full-stack Next.js application to analyze YouTube channels, compare competitors, and track video performance.

## Features

1. **YouTube Channel Search & Overview**
2. **Competitor Comparison**
3. **Video Performance Metrics**
4. **Sentiment Analysis (Bonus)**

## Tech Stack

- **Next.js**: Framework for server-rendered React applications.
- **Prisma**: ORM for database management.
- **SQLite**: Lightweight database.
- **YouTube Data API**: For fetching YouTube channel and video data.

## Getting Started

### Prerequisites

- Node.js (>= 18.x.x)
- npm or yarn
- A YouTube Data API key

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/youtube-competitor-analysis.git
   cd youtube-competitor-analysis

2. Install dependencies:

   ```bash
   npm install

3. Set up environment variables:

    Create a .env file in the root directory with the following content:
    DATABASE_URL="file:./dev.db"
    YOUTUBE_API_KEY=your_youtube_api_key

4. Set up the database:

    Run the following commands to set up Prisma and SQLite:
    ```bash
    npx prisma migrate dev --name init
    npx prisma generate

5. Start the development server:
   ```bash
   npm run dev

Open http://localhost:3000 in your browser to access the application.

### Usage

Search for a Channel: Use the search bar on the homepage to enter a YouTube channel name or URL. The app will display basic information and similar channels.

Track Competitors: Add channels to your tracking list and compare their metrics.

View Video Metrics: Click on a channel to view detailed video performance metrics.

### Contributing

Feel free to submit issues or pull requests. For major changes, please open an issue first to discuss what you would like to change.

### License

This project is licensed under the MIT License 



