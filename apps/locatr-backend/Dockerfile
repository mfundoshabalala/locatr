# Use the Node.js Alpine image as the base
FROM docker.io/node:lts-alpine

# Set working directory
WORKDIR /app

# Create a non-root user and group to run the app
RUN addgroup --system locatr-backend && \
    adduser --system -G locatr-backend locatr-backend

# Copy only the necessary files for dependencies
COPY package*.json pnpm-lock.yaml ./

# Install pnpm globally and install project dependencies
RUN npm install -g pnpm && \
    pnpm install --frozen-lockfile

# Copy the necessary files for building the app
COPY apps/locatr-backend ./apps/locatr-backend
COPY libs ./libs
COPY nx.json .eslintrc.json tsconfig.base.json ./

# Build only the locatr-backend app
RUN npx nx build locatr-backend --verbose

# Clean up unnecessary files to reduce image size
RUN rm -rf apps/ \
      libs/ \
      nx.json \
      .eslintrc.json \
      tsconfig.base.json

# Set permissions for the built files
RUN chown -R locatr-backend:locatr-backend ./dist

# Use the non-root user to run the app
USER locatr-backend

# Start the application
CMD [ "node", "dist/apps/locatr-backend/main.js" ]
