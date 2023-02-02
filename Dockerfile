# Base image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Copying package.json and yarn.lock
COPY package.json ./
COPY yarn.lock ./

# Install app dependencies
RUN yarn install

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build

# Start the server using the production build
CMD [ "node", "dist/main.js" ]
