# AI Workout App

An AI-powered workout tracking application built with React Native (Expo) for the frontend and Go for the backend.

## Features

- User registration and authentication
- Create, read, update, and delete workouts
- AI-assisted workout planning (future feature)
- Cross-platform mobile app (iOS, Android, Web)

## Tech Stack

### Frontend
- React Native
- Expo
- TypeScript
- Expo Router for navigation

### Backend
- Go
- Chi router
- PostgreSQL database
- JWT authentication

## Prerequisites

- Node.js (v18 or higher)
- Go (v1.21 or higher)
- PostgreSQL
- Docker (optional, for database)

## Installation

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd go_project
   ```

2. Install Go dependencies:
   ```bash
   go mod tidy
   ```

3. Set up the database:
   - Start PostgreSQL locally or use Docker:
     ```bash
     docker-compose up -d db
     ```
   - Run migrations (handled automatically on startup)

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

### Backend

1. Start the Go server:
   ```bash
   go run main.go -port 8081
   ```

   The server will start on port 8081 (configurable with -port flag).

### Frontend

1. Start the Expo development server:
   ```bash
   npm start
   ```

2. Run on desired platform:
   - iOS: `npm run ios`
   - Android: `npm run android`
   - Web: `npm run web`

## API Endpoints

### Authentication
- `POST /users` - Register a new user
- `POST /tokens/authentication` - Create authentication token

### Workouts (requires authentication)
- `GET /workout/{id}` - Get workout by ID
- `POST /workout` - Create a new workout
- `PUT /workout/{id}` - Update workout by ID
- `DELETE /workout/{id}` - Delete workout by ID

### Health Check
- `GET /health` - Server health check

## Environment Variables

Create a `.env` file in the backend directory for configuration (if needed).

## Testing

### Backend Tests
```bash
go test ./...
```

### Frontend Linting
```bash
npm run lint
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests
5. Submit a pull request

## License

This project is licensed under the MIT License.