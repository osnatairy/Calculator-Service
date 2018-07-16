# Calculator Service

This project created as an exercise in "Tools and Methodologies in Web Development" course in Bar Ilan University.
This is a calculator web service you can use easily by following those instructions.

## Getting Started

In order to run this project we use:

* [Git](https://maven.apache.org/) - to get the project.
* [Node.js](http://www.dropwizard.io/1.0.2/docs/) - using express and mocha among other packages.
* [Docker](https://maven.apache.org/) - for create docker container and docker compose.


### Installing

Open GIT CMD and clone the project to your local computer.
Use the comman:
```
git clone https://github.com/osnatairy/Calculator-Service.git
```

Now, that you have the project on your computer, you can test it.
The project has unit test and integration test.

You can run the unit test by using the command:
```
g
```

You can run the integration test by using the command:
```
g
```

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


## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
