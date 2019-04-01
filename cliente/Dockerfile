#This file creates a docker image that contains all the dependencies the apache application
#requires

#Build image with latest Ubuntu image version
FROM ubuntu:latest
#Run all the commands for basic udpates requires for ubuntu and autimatically put yes to all
RUN apt-get update -y
#Run all the comands to install apache 2
RUN apt-get install -y apache2
#Make a copy of the files in the real directory to the path where the web server of apache is located
#(/var/www/html/)
COPY ./animate.css /var/www/html/
COPY ./client.css /var/www/html/
COPY ./cliente.html /var/www/html/
COPY ./clientev3.js /var/www/html/
COPY ./Mickey2.png /var/www/html/
COPY ./pared.jpg /var/www/html/

#Epose port 80
EXPOSE 80

#Set the default comand for the container as. 'apache2ctl -D FOREGROUND'
#which means to left running the apache2 daemon listening at the background
CMD ["apache2ctl", "-D", "FOREGROUND"]