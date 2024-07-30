# Weather Dashboard

This project consists of a frontend and a backend service to fetch and display weather data. The frontend is built with React, and the backend is built with Flask. The services can be run locally or using Docker.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Running Locally](#running-locally)
    - [Backend](#backend)
    - [Frontend](#frontend)
3. [Running with Docker](#running-with-docker)
    - [Backend](#backend-docker)
    - [Frontend](#frontend-docker)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- Python (v3.8 or later)
- Docker (optional, for running with Docker)
- Docker Compose (optional, for running with Docker)

## Running Locally

### Backend

1. **Navigate to the backend directory**:
    ```bash
    cd backend
    ```

2. **Create and activate a virtual environment**:
    ```bash
    python3 -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. **Install the required dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

4. **Run the backend server**:
    ```bash
    export FLASK_APP=run.py
    flask run
    ```
    or
    ```bash   
    python run.py
    ```


    The backend server will start at `http://localhost:5000`.

### Frontend

1. **Navigate to the frontend directory**:
    ```bash
    cd frontend
    ```

2. **Install the required dependencies**:
    ```bash
    npm install
    ```

3. **Run the frontend server**:
    ```bash
    npm start
    ```

    The frontend server will start at `http://localhost:3000`.

## Running with Docker

### Backend (Docker)

1. **Navigate to the project root directory**:
    ```bash
    cd backend
    ```

2. **Build the Docker image**:
    ```bash
    docker build -t backend .
    ```

3. **Run the Docker container**:
    ```bash
    docker run -p 5000:5000 backend
    ```

    The backend server will start at `http://localhost:5000`.

### Frontend (Docker)

1. **Navigate to the project root directory**:
    ```bash
    cd frontend
    ```

2. **Build the Docker image**:
    ```bash
    docker build -t frontend .
    ```

3. **Run the Docker container**:
    ```bash
    docker run -p 3000:3000 frontend
    ```

    The frontend server will start at `http://localhost:3000`.

### Using Docker Compose

1. **Navigate to the project root directory**:
    ```bash
    cd path/to/project-root
    ```

2. **Run the Docker Compose services**:
    ```bash
    docker-compose up --build
    ```

    This will start both the backend and frontend services. The frontend server will be accessible at `http://localhost:3000` and the backend server at `http://localhost:5000`.
