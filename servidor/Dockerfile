#This file creates a docker image that contains all the dependencies the Node.js application
#requires

#Build image with latest Node image version
FROM node:latest
#Add all the files in the current directory into the app directory of this image
ADD . /app
#Move to the directory
WORKDIR /app

#Install npm
RUN npm install
#Generar el paquete de json requerido por express
RUN npm init -y
#Install Express and save flag to update dependencies inside package.json
RUN npm install express@4.16.0 --save
#Instalar cors library requerida por node
RUN npm install cors

#Set the default comand for the container as. 'node server.js'
CMD ["node", "server.js"]

#Epose port 3000
EXPOSE 3000