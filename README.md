# Node.js RESTful API Example
This is a simple Node.js RESTful API application that demonstrates how to set up an API with Express.

## Description
This API provides endpoints to retrieve a list of items. The API is dockerized, making it easy to deploy and run.

## Installation
To run this project locally, you'll need to have Docker installed. Follow these steps:

1. Build the Docker image:
   docker build -t denis67chuvakov/node-api-example .

2. Run the Docker container:
   docker run -p 3000:3000 denis67chuvakov/node-api-example

3. Access the API in your browser:
   - Visit http://localhost:3000/ to see the welcome message.
   - Visit http://localhost:3000/items to see the list of items.
