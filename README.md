# NASA Showcase

## Overview

This project fetches and displays images from NASA's Astronomy Picture of the Day (APOD) API. The APOD API provides daily images or videos, along with descriptions written by professional astronomers.

## Features
*   Daily Astronimical Images or Videos: Automatically fetches the image or video of the day from APOD API.
*  Informative Descriptions: Each image/video comes with a detailed description.

## Demo
https://nasa-showcase-two.vercel.app/

## How it Works
### Fetching Data
Here's a high-level overview of the process:
1. The application sends a GET request to the APOD API endpoint: `https://api.nasa.gov/planetary/apod`
2. Response Handling: The API returns a JSON object containind the details of the APOD, including the media, title, description, and other metadata. The application parses this response and extracts the relevant information.
3. Displaying the Data: The extracted data is dynamically rendered in the web application, showcasing the image/video along with its title and description.

## Getting Started
### Prerequisites:
* Node.js and npm
* Personal API key (you can generate yours from NASA's API portal)

### Installation
1. Clone the repository `git clone https://github.com/LU347/NASA-Showcase.git
cd NASA-Showcase`

2. Install dependencies `npm install`
3. Run the application `npm start` or `npm run dev`
4. Open in Browser `localhost:3000` 
