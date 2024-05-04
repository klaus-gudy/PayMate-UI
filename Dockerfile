# Use the official Node.js runtime as the base image
FROM node:20.12.2

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock if you use yarn) into the container
COPY package*.json ./

# Install dependencies, including 'devDependencies'
RUN npm ci

# Copy the rest of the application into the container
COPY . .

# Expose the port that Next.js usually runs on
EXPOSE 3000

# Use a command to start the development server
# Using `npm run dev` for a Next.js application
CMD ["npm", "run", "dev"]