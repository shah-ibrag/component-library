# Use the official Node.js image as the base image
FROM node:16-alpine AS build

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Storybook production build
RUN npm run build-storybook

# Use the official Nginx image to serve the build
FROM nginx:alpine

# Set the working directory
WORKDIR /usr/share/nginx/html

# Copy the build output to the Nginx HTML directory
COPY --from=build /usr/src/app/storybook-static .

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]