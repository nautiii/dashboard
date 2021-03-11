##
## EPITECH PROJECT, 2020
## Dashboard
## File description:
## Dockerfile
##

FROM node:14.15-alpine AS dashboard-client

WORKDIR /client

COPY client/ ./

RUN npm install && $(npm bin)/ng build --prod

FROM node:14.15-alpine AS dashboard-server

WORKDIR /server

COPY server/ ./

RUN npm install

COPY --from=dashboard-client /client/dist ./dist/

CMD ["npm", "start"]