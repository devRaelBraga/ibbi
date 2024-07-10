# IBBI Test

### Technologies
- NestJS
- PrismaORM
- SQLite
- ReactJS
- Docker

NestJS and PrismaORM were used to implement the API that provides data to the client. NestJS is a robust framework for NodeJS, with many implementations and tools available for API development. 
PrismaORM is a library for object-relational mapping (ORM), using the SQLite database.

For the client, ReactJS was used to provide a simple interface to the client.

To run the systems in the environment, Docker was used. Dockerfiles were created for the API and the Client, and both are executed through docker-compose, which has a configuration file `.yml`.

## Running the Application

To run the application, you need to have Docker installed on your machine.
- [Install Docker Desktop on Windows](https://docs.docker.com/desktop/install/windows-install/)

With Docker installed, run the following in your terminal:

```console
user@desktop:$ git clone https://github.com/devRaelBraga/ibbi.git
user@desktop:$ cd ibbi/ 
user@desktop:ibbi$ docker-compose up -d --build
```
After that, the application will be available at [http://localhost:5173](http://localhost:5173)

### Why did i use React and Node?

After some time doing a course of FastAPI, realized that i was using much time and not
getting much progress. So i decided to use the technologies that i have mastered, to show
what i can do, when i have the time to learn and master the framework.

I wish i had enough time to both do the FastAPI and Angular course and develop this test, but as i tried and could not,
i followed this path, which took me only a few hours to develop, and if i tried it from the start, much more could be made.

