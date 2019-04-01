Build an run app:

***In this directory using docker toolbox use to create and run all the containers:
***(this action does NOT rebuild the containers)
docker-compose up

*Stop and remove containers:
docker-compose down

*Only stop containers:
docker-compose stop

*Only start containers:
docker-compose start

***Rebuild content container
docker-compose build

***Show the containers that are running now
docker container ps

*Show all the containers event the ones that are no running
docker container ps -a

***Show ip virtaul machine
docker-machine ip