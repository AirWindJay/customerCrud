# Customer CRUD Application

Welcome to the Customer CRUD Application! This is a simple application to manage customer records using a frontend built with React and a backend powered by Laravel.

## Features

- **Create** a new customer
- **Read** customer details
- **Update** existing customer information
- **Delete** a customer record
- **List** all customers

## Technology Stack

- **Frontend**: React, React Router DOM, Bootstrap
- **Backend**: Laravel
- **Database**: MySQL

## Getting Started

Follow these steps to get the application up and running on your local machine:

### Prerequisites

Ensure you have the following installed:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/)
- [Composer](https://getcomposer.org/)

### Setting Up the Backend

1. **Navigate to the backend directory**:
   ```bash
   cd backend

2. Build and run the backend services:

bash
Copy code
docker-compose up --build


3. Create the database and run migrations:

bash
Copy code
docker-compose exec app php artisan migrate


 - -  - - - Setting Up the Frontend
1. Navigate to the frontend directory:

bash
Copy code
cd frontend


2. Install the required dependencies:

bash
Copy code
npm install
3. Run the development server:

bash
Copy code
npm start
Accessing the Application
Frontend: Open your browser and go to http://localhost:3000 to access the application.
Backend API: The API will be available at http://localhost:8000/api.
Testing
To run the tests for the backend, use the following command inside the backend directory:

bash
Copy code
docker-compose exec app php artisan test
For the frontend, you can run:

bash
Copy code
npm test
Common Issues
403 Forbidden Error: Ensure that you have the correct permissions and that you are logged in with the appropriate GitHub account.
Database Connection Error: Verify your .env file for correct database credentials and ensure Docker containers are running properly.
