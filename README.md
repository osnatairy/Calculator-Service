# Calculator Service

This project created as an exercise in "Tools and Methodologies in Web Development" course in Bar Ilan University.
This is a calculator web service you can use easily by following those instructions.

## Getting Started

In order to run this project we use:

* [Git](https://maven.apache.org/) - to get the project.
* [Node.js](http://www.dropwizard.io/1.0.2/docs/) - using express and mocha among other packages.
* [Docker](https://maven.apache.org/) - for create docker container and docker compose.


### Clone

Open GIT CMD and clone the project to your local computer.
Use the comman:
```
git clone https://github.com/osnatairy/Calculator-Service.git
```

## Running the tests
First verify that you got the tools needed for running and testing - express, chai and mocha:
```
npm install express
npm install chai
npm install mocha
```
Now, that you have the project on your computer (and the tools), you can test it.
The project has many unit tests and some integration test (we chose the pyramid of testing for the homework).

You can run the unit test and the integration test by using the command:
```
npm run test
```

### Docker & Docker-compose

For the next step you should have Docker on your computer.

Run the dockr:
```
sudo docker build . -t currency-calculator
sudo docker run -d -p 3000:3000 currency-calculator
```

Run the docker-compose:
```
sudo docker-compose up -d
```

Now you can run the Calculate Application. Open your brouser and insert the follow URL:
 [localhost:8000](http://localhost:8000/login) 

Login and use the calculator. :)


## Authors

* **Osnat Drien** - osnatairy@gmail.com
* **Khen Aharon** - khen.aharon@gmail.com
