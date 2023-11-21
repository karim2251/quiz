
# Use the official Node.js image as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /app
RUN mkdir -p /app
# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy all project files to the container
COPY . .

# Build the Vite app
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the React.js application
CMD ["npm", "run", "dev"]
