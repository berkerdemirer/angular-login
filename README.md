# Fobtask

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

## Installation

If you don't have node.js on your system download the stable version from this link:
https://nodejs.org/en/,

Install angular-cli:

`npm install -g @angular/cli`

Clone the project and run `npm install` on terminal while you are in the project folder

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Functionalities

-Register <br/>
-Login <br/>
-Log-out <br/>
-Route protection <br/>
-Validation with real Node.js backend using MongoDB

## Structure of the App

Application is developed with one module per component approach. All modules are loaded lazily so that it improves the performance of the app. AuthGuard is implemented to the routes so that without valid JWT token, unauthorized user cannot access /details route of the app. For styling purposes angular material library is used.

## REST Schema & Backend
  
  <b>Server is deployed to heroku so at first request server needs to bootup, there may be little delays because of that. </b><br/>
  
  apiUrl: 'https://agile-peak-56363.herokuapp.com'<br/>
  /users/register -> Register new user <br/>
  /users/authenticate -> Log-in and authenticate<br/>
  
## Session Management

After successfully authorize the user, jwt token is stored in local storage using key,value map. Unless it is deleted by the user with log-out function, users stays logged in


  


