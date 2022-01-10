# Ticket Maestro

Ui for a Ticketsystem

Receaving Tickets

Adding a ticket

Managing tickets

project features and functionality based on https://angular.io/tutorial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

---------------------------------------------------------------

## concepts

### modules and submodules

a module in angular are containers for a cohesive block of code dedicated to an application task
every angular project has a root module in `app`
submodules are seperate containers which hold there own logic 
all submodules need to be imported to the root module 

--> added `ticket-entry-point` directory 
contains `ticket-entry-point.mdoule` which is a submodule of app  
delegates all logic within that module 

https://github.com/Erwin-Feld/ticket-maestro/tree/generating-and-using-a-submodule


---------------------------------------------------------------
### components and subcomponents

Components are seperate logic blocks connected to the DOM

logic used in this app is to have with each submodel a parent component which contains all child components

contains `ticket-entry-point.component` which is acts as a parent component all functionality (child-components) are added to the parent
and exported to the root component 

https://github.com/Erwin-Feld/ticket-maestro/tree/creating-and-using-a-paren-component

---------------------------------------------------------------

### child components for logic seperation
--> added `incoming-tickets` directory inside `ticket-entry point`
contains `incoming-tickets.component` which hold the logic to display all incoming tickets

https://github.com/Erwin-Feld/ticket-maestro/tree/logic-seperation-with-child-components


---------------------------------------------------------------

### using mock data and ng for loop to display it

#### mock data
for better logic seperation mock data is used from a seperate directory which is displayed in the component
--> added mockdata directory `mock-data` contains `mock-tickets.json`
used as mock data. to be able to import json objects 
`allowSyntheticDefaultImports` and `resolveJsonModule` needs to be added and set to `true`

#### for loops
 angular has build in methods to display iterable data directly in the html file --> with `*ngFor` 
` <li *ngFor="let ticket of incomingTickets">`
creates for each element of the data a new list item

to distinguish and display the methods better the Angular lenguage service addon is very helpfull 

https://github.com/Erwin-Feld/ticket-maestro/tree/using-mock-data-and-for-loops


#### passing props with child components

logic: child component which displays data 

another comp used to display the data, the other comp can be re-used again
to display the data from the initial child comp with the other comp
passing props are used 
`@Input() ticketValues!: TicketData;`

using the comp the data is loaded with 
` <app-ticket [ticketValues]="ticket"></app-ticket> `

https://github.com/Erwin-Feld/ticket-maestro/tree/passing-props-with-child-component

---------------------------------------------------------------

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
