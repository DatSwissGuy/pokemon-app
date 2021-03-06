# Base image
FROM node:lts-alpine
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
# Copy files
COPY . /app
# Build the app
RUN npm run build:ssr
# Serve the app via Node Express
CMD npm run serve:ssr --host 0.0.0.0
