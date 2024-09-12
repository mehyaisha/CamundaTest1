# Animal Picture API

## Overview

This Node.js application provides a REST API to save and fetch pictures of animals. It uses MongoDB as the database and Docker for containerization.

## REST API Endpoints

### Save Pictures

- **Endpoint:** `/save_pictures`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "animalType": "dog",
    "numberOfPictures": 5
  }
