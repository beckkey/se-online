# README #

This README is document whatever steps are necessary to get application up and running.

### What is this for? ###

In order to run application on Windows or Linux (prefered Linux) OS, you need to install and setup some dependecies:

* NodeJS ver.8.2 >
* npm ver 4 >
* MongoDB latest ver.

### How do I get set up? ###

* Summary of set up
At first need clone or copy application from repo or CD.
Need to CD at seonline and seonline-ui dir and run `npm install` and if it's need run `npm update`
* Configuration
For run application locally go these steps:
- run `mongod`(sometimes need `sudo`)
- go to seonline dir and run `npm start`
- go to the seonline-ui dir and run `npm run dev` (run the dev mode of UI)
- and after page with application will automatically open
* Dependencies
All dependencies will install after `npm install`
* Database configuration
NoSQL DB `MonogoDB`
* How to run tests
No test for now
* Deployment instructions
For deploy need to run `npm run prod` in seonline-ui dir. And after this link ui path to backend (seonline)