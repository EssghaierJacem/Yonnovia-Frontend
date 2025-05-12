# Build stage
FROM node:20-alpine as build

# Set working directory
WORKDIR /app

# Copy package files for optimized layer caching
COPY package.json package-lock.json yarn.lock* ./

# Install dependencies using yarn (as specified in package.json)
RUN yarn install --frozen-lockfile

# Copy all files
COPY . .

# Build the app
RUN yarn build

# Production stage
FROM nginx:stable-alpine

# Copy built files from build stage to nginx serve directory
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 