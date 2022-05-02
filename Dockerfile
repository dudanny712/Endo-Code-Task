FROM node:current-alpine
#Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm install
RUN npm run build
RUN npm install -g serve
RUN serve -s build
ADD src /usr/src/app/src
ADD public/usr/src/app/public
CMD["yarn","start"]