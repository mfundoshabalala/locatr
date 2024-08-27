# Use the Node.js Alpine image as the base
FROM docker.io/node:lts-alpine

# Set working directory
WORKDIR /app

# Create a non-root user and group to run the app
RUN addgroup --system locatr-backend && \
    adduser --system -G locatr-backend locatr-backend

# Copy the package files for the entire monorepo to install dependencies
COPY package*.json pnpm-lock.yaml ./

# Install pnpm globally and install project dependencies
RUN npm install -g pnpm && \
    pnpm install --frozen-lockfile

# Copy only the locatr-backend app files and nx workspace configuration
COPY apps/locatr-backend ./apps/locatr-backend
COPY libs ./libs
COPY nx.json .eslintrc.json tsconfig.base.json ./

# Build only the locatr-backend app
RUN npx nx reset && npx nx build locatr-backend --verbose

# Remove node_modules and other unnecessary files to reduce image size
RUN rm -rf node_modules apps libs nx.json .eslintrc.json tsconfig.base.json

# Set permissions for the locatr-backend folder
RUN chown -R locatr-backend:locatr-backend ./

# Use the non-root user to run the app
USER locatr-backend

# Start the application
CMD [ "node", "dist/apps/locatr-backend/main.js" ]
