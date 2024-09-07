# Use the Node.js LTS image
FROM node:lts-alpine AS base

# Set up PNPM environment variables and enable corepack
ENV PNPM_HOME="/home/locatr-backend/.pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# Set working directory
WORKDIR /usr/src/app

# Create a non-root user and group
RUN addgroup --system locatr-backend && adduser --system -G locatr-backend locatr-backend

# Install npm globally
RUN npm install -g npm@10.8.3

# Copy necessary configuration files
COPY package.json pnpm-lock.yaml ./
COPY nx.json .eslintrc.json tsconfig.base.json .prettierrc ./

# Install project dependencies
RUN pnpm install --frozen-lockfile --silent

# Ensure pnpm home is in the PATH and install nx globally
RUN export PATH="$PNPM_HOME:$PATH" && pnpm add -g nx

# Copy the backend application code and project-specific configuration
COPY apps/locatr-backend ./apps/locatr-backend
COPY libs ./libs

# Clean the Nx cache and build the application
RUN npx nx reset
RUN npx nx build locatr-backend --configuration=production

# For debugging: Expose the contents of the app directory
RUN ls -la

# remove node_modules, libs etc
# RUN rm -rf node_modules libs apps .prettierrc .eslintrc.json nx.json tsconfig.base.json .nx

# For debugging: Expose the contents of the app directory
# RUN ls -la
RUN ls -la dist/apps/locatr-backend

# Expose the port the app runs on
EXPOSE 3000

# Switch to the non-root user
USER locatr-backend

# Run the app
CMD ["node", "dist/apps/locatr-backend/main.js"]
