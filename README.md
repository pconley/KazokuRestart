# Kazoku

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.4.

It is a restart of the Kazoku family tree project in Jan 2018.  Upgrading to the latest and greatest
libs and techniquest by restarting with the Heroes tutorial... and porting over the previous angular
client code (in progress).

## Techonologies ##

-- Angular5 and Firestore
-- dropped Auth0 in favor of native Firestore Authentication
-- moved off the classic FS database to the new FireSTORE
-- dropped Material Design for straight up Bootstrap

## Quick Commands
```
ng build        # compile project
npm start		# run the dev server
```
Scaffolding : component|directive|pipe|service|class|guard|interface|enum|module
```
ng generate component widget
```
## Build

To build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
```
ng build
```

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).  But the 
sm flag is important.
```
ng test -sm=false
```
## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
