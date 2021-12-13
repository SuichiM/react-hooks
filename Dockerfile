FROM node:lts-slim

WORKDIR '/home/app'

ARG COMMAND
ENV COMMAND $COMMAND

COPY package.json package.json

RUN npm install

# CMD npm run $COMMAND
# RUN npm run $COMMAND

ENTRYPOINT ["tail", "-f", "/dev/null"]
