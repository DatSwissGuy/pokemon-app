# Base image
FROM node:14.2.0-alpine3.11
# Working directory, duh...
WORKDIR /app
# Add binaries to path
ENV PATH /app/node_modules/.bin:$PATH
# Install Angular CLI
RUN npm install -g @angular/cli
# Copy package.json to container
COPY ./package.json /app
# Install dependencies
RUN npm install --silent
COPY . /app
# Build the app
RUN npm run build:ssr
# Serve the app via Node Express
CMD npm run serve:ssr --host 0.0.0.0
