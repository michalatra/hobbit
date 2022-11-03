FROM node:18.12.0 AS development
ENV NODE_ENV development
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install
# Copy app files
COPY . .
# Expose port
EXPOSE 3000
# Start the app
CMD [ "npm", "start" ]

FROM node:18.12.0 as build

WORKDIR /app

ENV NODE_ENV=production

COPY package.json .
COPY package-lock.json .

RUN npm ci --silent

COPY . .

RUN npm run build

FROM nginx:stable-alpine as production
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


