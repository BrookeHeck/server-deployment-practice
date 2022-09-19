# Server Deployment Practice

**Author**: Brooke Heck

**Version**: 1.0.0

## Overview
This is a practice express server that can add numbers or give a hello greeting. The main point of this server was to practice using jest to test my server. There are two tests that are making sure the '/add' and '/hello' routes are returning the get correct information after a get request is made.

## Deployed Servers
[brookeheck-server-deploy-dev](https://brookeheck-server-deploy-dev.herokuapp.com/)


[brookeheck-server-deploy-prod](https://brookeheck-server-deploy-prod.herokuapp.com/)

## Architecture
This is an express server and is therefore written in javascript. All the endpoints are in the server.js file. The tests for my server can be found in the testServer.js file. Finally, the index.js is runs on the npm start command and will allow the server to listen on a specified port.

## Change Log
09-19-2022 4:45pm - App successfully adds two numbers and give a personalized greeting