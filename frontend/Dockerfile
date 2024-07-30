FROM node:14-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

# Ensure the environment variable is available during the build
ARG REACT_APP_BACKEND_URL
ENV REACT_APP_BACKEND_URL=${REACT_APP_BACKEND_URL}

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
