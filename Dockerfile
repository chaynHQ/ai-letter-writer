# Stage 1: Build the Next.js application
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the application code
COPY . .

# Copy the .env file for build-time environment variables
# **Only for local development.**
# **Do not include this in production builds.**
COPY .env .env

# Generate Prisma Client
RUN npx prisma generate

# Build the Next.js application
RUN npm run build

# Stage 2: Serve the application with a minimal image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install production dependencies
COPY package.json package-lock.json ./
RUN npm ci --only=production

# Copy the build from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma

# Copy the generated Prisma Client from the builder stage
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma

# Copy other necessary files
COPY --from=builder /app/package.json ./package.json

COPY swagger swagger

# Expose the port the app runs on
EXPOSE 8080

# Set environment variables for runtime
# These will be overridden by Docker run arguments or Azure App Service settings
ENV DATABASE_URL=${DATABASE_URL}
ENV AZURE_OPENAI_API_KEY=${AZURE_OPENAI_API_KEY}
ENV AZURE_OPENAI_ENDPOINT=${AZURE_OPENAI_ENDPOINT}
ENV AZURE_OPENAI_DEPLOYMENT=${AZURE_OPENAI_DEPLOYMENT}
ENV AZURE_OPENAI_API_VERSION=${AZURE_OPENAI_API_VERSION}
ENV PORT=8080

# Start the Next.js application
CMD ["npm", "start"]
