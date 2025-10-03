# BUILD STEP
FROM node:18-alpine AS build

WORKDIR /JFAA

COPY ./package*.json ./

RUN npm ci --legacy-peer-deps --omit=dev

COPY . .
 
# FINAL STEP
FROM node:18-alpine

WORKDIR /JFAA

COPY --from=build /JFAA/node_modules ./node_modules
COPY --from=build /JFAA/package*.json ./
COPY --from=build /JFAA/*.js ./
COPY --from=build /JFAA/src ./src
COPY --from=build /JFAA/views ./views
COPY --from=build /JFAA/*.sqlite ./

EXPOSE 3004

CMD ["npm", "start"]