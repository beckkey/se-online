# README #

This README is document whatever steps are necessary to get application up and running.

### Step by step install ###

In order to run application on Windows or Linux (prefered Linux) OS, you need to install and setup some `dependecies`:

* NodeJS lastest ver. You can find it here `https://nodejs.org/en/download/`
* npm latest ver. (npm is distributed with Node.js- which means that when you download Node.js, you automatically get npm installed on your computer.)
* MongoDB latest ver. (MongoDB Community Edition requires Windows Server 2008 R2, Windows 7, or later. The .msi installer includes all other software dependencies and will automatically upgrade any older version of MongoDB installed using an .msi file.

To find which version of Windows you are running, enter the following commands in the `Command Prompt` or `Powershell`:
`wmic os get caption`
`wmic os get osarchitecture`) You can find best tutorial, how-to and download it here: `https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/` 

#### Check that you have node and npm installed ####
To check if you have Node.js installed, run this command in your terminal:

`node -v`

To confirm that you have npm installed you can run this command in your terminal:

`npm -v

### How do I get set up? ###

* Summary of set up
At first need clone or copy application from repo or CD.
Need to go at seonline and seonline-ui dir and run `npm install` command in termianl and if it's need run `npm update`
* Configuration
For run application locally go these steps:
- Start mongod: run `mongod`(sometimes need `sudo`) in Linux or `net start MongoDB` in Windows
- go to seonline dir and run `npm start`, and the backend will start at `3004` port.
- go to the seonline-ui dir and run `npm run dev` (run the dev mode of UI at port `8081`)
- and after page with application will automatically open in default browser
* Dependencies
All dependencies will automatically install after `npm install`
* Database configuration
NoSQL DB `MonogoDB`
* How to run tests
No test for now
* Deployment instructions
For deploy need to run `npm run build` in seonline-ui dir. And after this link ui path to backend in `.env` config file `UI_PATH`(in se-online dir)