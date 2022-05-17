FROM node:14.19-alpine as build-stage
WORKDIR /usr/app
COPY package*.json ./

RUN yarn install --development=true --network-timeout=300000
COPY . ./


# Build app
RUN yarn build

# Expose the listening port
EXPOSE 3000

# Run npm start script when container starts
CMD [ "yarn", "start" ]